
import { initializeApp, getApp } from "firebase/app";
import {
  getAuth, signInWithEmailAndPassword, sendPasswordResetEmail,
  GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword
} from "firebase/auth"
import {
  getFirestore, collection, getDocs, addDoc,
  doc, setDoc, query, limit,
  getDoc, updateDoc, deleteField
} from "firebase/firestore";
import "firebase/auth";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD4UYMo66y4lgkZRCYdLsmNnxZfwg9i4T4",
  authDomain: "shadowwar-c0a19.firebaseapp.com",
  projectId: "shadowwar-c0a19",
  storageBucket: "shadowwar-c0a19.appspot.com",
  messagingSenderId: "249705623318",
  appId: "1:249705623318:web:535a924733e669f31d6a37"
};


class Firebase {
  constructor() {
    try {
      initializeApp(firebaseConfig);
    } catch (error) {
      console.error("Error initializing Firebase:", error);
    }
    this.firebase = getApp();
    this.db = getFirestore();
    this.auth = getAuth();
  }


  async signInWithEmail(email, pwd) {
    try {
      createUserWithEmailAndPassword(this.auth, email, pwd)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error.message);
    }
  };


  async login(email, pwd) {
    signInWithEmailAndPassword(this.auth, email, pwd)
      .then(function (user) {
        window.location.replace("/play");
        /*this.auth.currentUser.getIdToken(true).then(function (newIdToken) {
              //idToken = newIdToken;
              //console.debug("[Upwine Auth] ID Token: ", newIdToken);
              //console.debug(f.auth().currentUser);
  
              //Fetch.postLogin(newIdToken)
              //getSessionCookie(newIdToken);
              window.location.replace("/instructorHome");
          })*/

      }).catch((e) => {
        console.log(e);
      })
  }


  async signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(this.auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(credential, token, user);
        window.location.replace("/play");
      });
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error.message);
    }
  };



  async getUserAuth() {
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged(user => {
        if (user) {
          resolve(user);
        } else {
          resolve(null);
        }
      }, reject);
    });
  }

  async getRecoveryAuth(email) {
    sendPasswordResetEmail(this.auth, email).then(() => {
      return true;
    }
    ).catch((e) => {
      console.log(e);
      return false;
    });
  }


  async checkCollectionExists(db, collectionPath) {
    const collRef = collection(db, collectionPath);
    const q = query(collRef, limit(1));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return false;
    } else {
      return true;
    }
  };


  async copiarDocumentoYSubcolecciones(db, coleccionOrigen, coleccionDestino, idDocumento) {
    const docOrigenRef = doc(db, coleccionOrigen, idDocumento);
    const docData = await getDoc(docOrigenRef);
    const docDestinoRef = doc(db, coleccionDestino, idDocumento);
    await setDoc(docDestinoRef, docData.data());
    const nombresSubcolecciones = ['characters'];
    for (const nombreSubcoleccion of nombresSubcolecciones) {
      const subcoleccionOrigenRef = collection(docOrigenRef, nombreSubcoleccion);
      const documentosSubcoleccion = await getDocs(subcoleccionOrigenRef);

      documentosSubcoleccion.forEach(async (documento) => {
        const subcoleccionDestinoRef = collection(docDestinoRef, nombreSubcoleccion);
        const docDestino = doc(subcoleccionDestinoRef, documento.id);
        await setDoc(docDestino, documento.data());
      });
    }
  }

  async copyDefault(db, coleccionOrigen, coleccionDestino) {
    const coleccionOrigenRef = collection(db, coleccionOrigen);
    const documentosSnapshot = await getDocs(coleccionOrigenRef);

    const operacionesBatch = documentosSnapshot.docs.map(documento =>
      this.copiarDocumentoYSubcolecciones(db, coleccionOrigen, coleccionDestino, documento.id)
    );

    try {
      await Promise.all(operacionesBatch);
      console.log("Todos los documentos y subcolecciones han sido copiados con éxito.");
      window.location.reload();
    } catch (error) {
      console.error("Error copiando documentos y subcolecciones:", error);
    }
  };

  async addDataGame(param) {
    try {
      const testCollectionRef = doc(this.db, this.auth.currentUser.uid, "datagame");
      await setDoc(testCollectionRef, param, { merge: true })
    } catch (error) {
      console.error('Error al agregar datos:', error);
    }
  };

  async removeDataGame(param) {
    try {
      const testCollectionRef = doc(this.db, this.auth.currentUser.uid, "datagame");
      const updates = {};

      param.forEach(element => {
        updates[element] = deleteField();
      });

      await updateDoc(testCollectionRef, updates);
    } catch (error) {
      console.error('Error al agregar datos:', error);
    }
  };

  async addDataGameDecision(param, chapter, day, progress) {
    try {
      let TEMP_cap = chapter === "Prologo" ? "0" : chapter.toString();
      const docPath = `${this.auth.currentUser.uid}/datagame/decisions/${TEMP_cap}_${day}_${progress}`;
      const docRef = doc(this.db, docPath);
      const docSnapshot = await getDoc(docRef);
      const existingData = docSnapshot.exists() ? docSnapshot.data().data || [] : [];
      existingData.push(param.lastDecision);
      await setDoc(docRef, { data: existingData }, { merge: true });
      this.addDataGame(param);
    } catch (error) {
      console.error('Error al agregar datos:', error);
    }
  };

  async addDataGameCharacterPrincipal(param, character) {
    try {
      const docPath = `${this.auth.currentUser.uid}/datagame/characters/${character}`;
      const docRef = doc(this.db, docPath);
      await setDoc(docRef, param, { merge: true });
    } catch (error) {
      console.error('Error al agregar datos:', error);
    }
  };
}
export default Firebase;
