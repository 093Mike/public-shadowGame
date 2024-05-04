import React, { useEffect, useRef, useState } from 'react';
import GameComponent from './GameComponent';
import AppStateContext from '../../appState/AppStateContext';
import Firebase from '../../FirebaseEngine/firebase';


const GameEngine = (props) => {

    const appState = React.useContext(AppStateContext);
    const mode = appState.state.get("gameMode");
    const day = appState.state.get("dayChapter");
    const chapter = appState.state.get("numChapter");
    const progress = appState.state.get("progressDay");

    const [dataGameChapter, setDataGameChapter] = useState(0)
    const [state, setState] = useState(mode);
    const temporizadorId = useRef(null);
    const f = new Firebase();


    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const engineCombat = () => {
        console.log(appState, dataGameChapter);
        if (appState !== null & dataGameChapter !== 0) {
            let statsCharacter = appState.characters.get(appState.state.get("getPrimarycharacter"));
            if (appState.state.get("getTurnCombat") === undefined) {
                f.addDataGameCharacterPrincipal(dataGameChapter?.enemy, "enemy");
                let statsEnemy = dataGameChapter?.enemy;
                let luk = (statsEnemy.luk * 1000) - (getRandomInt(statsCharacter.luk * 1000) / statsCharacter.luk);
                if (((statsEnemy.luk * 1000) - (statsEnemy.luk * 10)) < luk) {
                    f.addDataGame({ roundCombat: 1, turnCombat: true, stateCombat: "INIT", objectsEnemy: statsEnemy.luk });
                } else if (((statsEnemy.luk * 1000) - (statsEnemy.luk * 500)) < luk) {
                    f.addDataGame({ roundCombat: 1, turnCombat: true, stateCombat: "INIT", objectsEnemy: statsEnemy.luk * 2 });
                } else if (((statsEnemy.luk * 1000) - (statsEnemy.luk * 750)) < luk) {
                    f.addDataGame({ roundCombat: 1, turnCombat: true, stateCombat: "INIT", objectsEnemy: statsEnemy.luk * 3 });
                } else {
                    f.addDataGame({ roundCombat: 1, turnCombat: true, stateCombat: "INIT", objectsEnemy: statsEnemy.luk * 4 });
                }
            }
        }

    }

    const engineDialogue = () => {
        document.getElementById("id_wrapper").style.backgroundColor = "black";
    }

    const loadJSON = async () => {
        try {
            let TEMP_cap = chapter === "Prologo" ? 0 : chapter;
            const response = await fetch(`/game/chapters/${TEMP_cap}.json`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setDataGameChapter(data[day][progress]);
            f.addDataGame({ state: data[day][progress].STATE })
            return data;
        } catch (error) {
            console.error("Error al cargar el archivo de capítulo: ", error);
            return null;
        }
    };

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const loadSrcPublic = async (path) => {
        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.url;
            document.getElementById("id_wrapper").style.backgroundImage = `url(${data})`;
                

        } catch (error) {
            console.error("Error al cargar el archivo de capítulo: ", error);
            return null;
        }
    }
    useEffect(() => {
        loadJSON();
    }, [appState])

    useEffect(() => {
        setState(mode);
        if (dataGameChapter !== 0) {
            if (mode === "WAIT" && progress !== undefined) {
                f.removeDataGame(["turnCombat", "stateCombat", "roundCombat", "objectsEnemy"]);
                f.removeDataGame(["lastDecision"]);
                document.getElementById("id_wrapper").style.background = "";
            } else {
                document.getElementById("id_wrapper").style.backgroundImage = "";
                document.getElementById("id_wrapper").style.backgroundSize = "";
                if (mode === "DIALOGUE") {
                    engineDialogue();
                } else if (mode === "COMBAT") {
                    engineCombat()
                }
            }

        }
    }, [mode, progress]);

    useEffect(()=>{
        if(mode === "WAIT"){
            let dib = ["1_0_0", "1_0_1", "1_0_3", "1_0_4" ];
            let num = getRandomInt(dib.length);
            loadSrcPublic(`/game/img/${dib[num]}.png`);
            document.getElementById("id_wrapper").style.backgroundSize = "cover";
            temporizadorId.current = setTimeout(() => {
                f.addDataGame({ progress: progress + 1});
            }, 3000); 
        }
        return () => {
            if (temporizadorId.current) {
                clearTimeout(temporizadorId.current);
            }
        };
    },[mode])

    return (
        <>
            {dataGameChapter === 0 ? <h1>CARGANDO</h1> :
                <GameComponent
                    dataGame={dataGameChapter}
                    state={state}
                />
            }

        </>

    );
}

export default GameEngine;
