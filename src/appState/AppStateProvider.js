import React, { useEffect } from 'react';
import AppStateContext from "./AppStateContext";
import useAppState from "./AppState";
import { getFirestore, collection, doc, onSnapshot } from "firebase/firestore";
import Firebase from '../FirebaseEngine/firebase';

const AppStateProvider = ({ children }) => {
  
  const appState = useAppState();
  const db = getFirestore();
  const f = new Firebase();

  useEffect(() => {
    f.checkCollectionExists(db, f.auth.currentUser.uid).then((exists) => {
      if (exists) {
        const uid = f.auth.currentUser.uid
        const docRef = doc(collection(db, uid), "datagame");

        const unsubscribe = onSnapshot(docRef, (doc) => {
          if (doc.exists()) {
            const data = doc.data();
            appState.state.set(data);
          } else {
            console.log("No such document!");
          }
        });

        const levelsCollectionRef = collection(db, uid, "datagame", "decisions");
        const unsubscribeDecisions = onSnapshot(levelsCollectionRef, (querySnapshot) => {
          const data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          appState.decisions.set(data);
        });

        const characterCollectionRef = collection(db, uid, "datagame", "characters");
        const unsubscribeCharacters = onSnapshot(characterCollectionRef, (querySnapshot) => {
          const data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          appState.characters.set(data);
        });

        const objectsCollectionRef = collection(db, uid, "datagame", "objects");
        const unsubscribeItems = onSnapshot(objectsCollectionRef, (querySnapshot) => {
          const data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          appState.objects.set(data);
        });

        return () => {
          unsubscribe();
          unsubscribeDecisions();
          unsubscribeItems();
          unsubscribeCharacters();
        };

      } else {
          f.copyDefault(db, "default", f.auth.currentUser.uid)
      }
    })

  }, [db]);

  return (
    <AppStateContext.Provider value={appState}>
      {appState !== undefined ? children : <h1>CARGANDO</h1>}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;