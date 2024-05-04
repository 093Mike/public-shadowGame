import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';

import MutableComponent from '../../../../composer/MutableComponent';
import AppStateContext from '../../../../appState/AppStateContext';
import actions from '../../../../assets/game/actions/actions';
import combatActions from '../../../../assets/game/combat/combatActions';
import music from "../../../../assets/sounds/echorex.mp3";
import Firebase from '../../../../FirebaseEngine/firebase';
import objectsList from '../../../../assets/game/objects/objects';

const GameCombat = (props) => {

    const [statsCharacter, setStatsCharacter] = useState(null);
    const [statsEnemy, setStatsEnemy] = useState(null);

    const [round, setRound] = useState(1);
    const [turn, setTurn] = useState(true);
    const [state, setState] = useState("");
    const [message, setMessage] = useState("CARGANDO...");

    let appState = React.useContext(AppStateContext);
    let f = new Firebase();

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const actionExecute = (action) => {
        const TEMP_FUN = actions[action[0]];
        TEMP_FUN(appState, action[1]);
    }

    const checkParamsAdditionals = (numAction, attack, stats) => {
        if (attack?.HP) { actionExecute([numAction[0], { vida: attack?.HP }]); }
        return stats;
    }

    const defenderCharacter = (enemy, TEMP_agilidad) => {
        let def = 0;
        if (enemy) {
            if (appState.state.get("defenseCombat")) {
                def = statsCharacter.def;
            }
        } else {
            if (appState.state.get("defenseEnemyCombat")) {
                def = statsEnemy.def;
            }
        }

        if (TEMP_agilidad >= 90) { def = def / 6; }
        else if (TEMP_agilidad >= 40) { def = def / 4; }
        else { def = def / 2; }

        return def;
    }

    const attackCharacter = (attack, enemy) => {
        let stats, numAction, atk = 0;
        let ataque = combatActions[appState.state.get("getPoder")].ATK[attack];
        if (enemy) { stats = statsEnemy; numAction = [4, 1, 5]; } else { stats = statsCharacter; numAction = [1, 4, 3]; }
        stats = checkParamsAdditionals(numAction, ataque, stats);
        let TEMP_agilidad = (getRandomInt(stats.agi * 100) / stats.agi);
        let def = defenderCharacter(enemy, TEMP_agilidad);
        if (TEMP_agilidad >= 50) {
            TEMP_agilidad = TEMP_agilidad / 10;
            atk = ((ataque.ATK * (stats.atk / 50)) + (TEMP_agilidad * 1.2) + (ataque.MP - (((stats.hungry * 2) / 10) + ((stats.thirsty * 2) / 10))))
        } else {
            if (TEMP_agilidad <= 10) {
                if (enemy) {
                    setMessage("¡Has evitado el ataque!");
                } else {
                    setMessage("¡El enemigo ha evitado tu ataque!");
                }
            } else {
                TEMP_agilidad = TEMP_agilidad / 10;
                atk = (((ataque.ATK * (stats.atk / 100)) + (ataque.MP - (((stats.hungry * 2) / 10) + ((stats.thirsty * 2) / 10)))) / 1 + (TEMP_agilidad / 10))
            }
        }

        atk -= def;

        if (!(atk <= 0)) {
            if (enemy) {
                setMessage("¡Has recibido " + atk.toFixed(2) + " de ataque!");
            } else {
                setMessage("El enemigo ha recibido " + atk.toFixed(2) + " de ataque!");
            }
            actionExecute([numAction[1], { vida: atk }]);
        } else {
            if (enemy) {
                setMessage(message => message + " El enemigo no ha tenido suficiente fuerza para atacar.");
            } else {
                setMessage(message => message + " No has tenido suficiente fuerza para atacar.");
            }
        }
        actionExecute([numAction[2], { mp: ataque?.MP }]);
        if (!enemy) {
            f.addDataGame({ "turnCombat": false })
            f.addDataGame({ "stateCombat": "WAIT" });
        }
    }

    const defAction = (enemy) => {
        if (enemy) {
            f.addDataGame({ defenseEnemyCombat: true });
            setMessage("El enemigo quiere defenderse.");
        } else {
            f.addDataGame({ defenseCombat: true });
            setMessage("Quieres defenderte.");
            f.addDataGame({ "turnCombat": false })
            f.addDataGame({ "stateCombat": "WAIT" });
        }
    }

    const useObject = (enemy, obj) => {

    }

    const engineIAEnemy = () => {
        let luk = (statsEnemy.luk * 1000) - (getRandomInt(statsCharacter.luk * 1000) / statsCharacter.luk);
        luk = (statsEnemy.luk * 1000) - luk;
        console.log(luk);
        let useObj = false;
        let objects = appState.state.get("getNumObjectsEnemy");

        if (statsEnemy.HP < 100) {
            if (luk <= 750) {
                if (objects !== 0 && !useObj) {
                    f.addDataGame({ objectsEnemy: (objects - 1) })
                    actionExecute([8, { vida: objectsList["LIFE"][0].HP }]);
                    setMessage("El enemigo ha usado Vendaje - ");
                    useObj = true;
                }
            } else if (!useObj && luk >= 500) {
                f.addDataGame({ objectsEnemy: (objects - 1) })
                actionExecute([8, { vida: objectsList["LIFE"][1].HP }]);
                setMessage("El enemigo ha usado Curación - ");
                useObj = true;
            }
        }

        if (statsEnemy.MP === 0 || statsEnemy.MP < 40) {
            if (luk <= 750) {
                if (objects !== 0 && !useObj) {
                    f.addDataGame({ objectsEnemy: (objects - 1) })
                    actionExecute([7, { mp: objectsList["POWER"][0].MP }]);
                    setMessage("El enemigo ha usado Potenciador - ");
                    useObj = true;
                }
            } else {
                if (objects !== 0 && !useObj && luk >= 450) {
                    f.addDataGame({ objectsEnemy: (objects - 1) })
                    actionExecute([7, { mp: objectsList["POWER"][1].MP }]);
                    setMessage("El enemigo ha usado Bebida Energetica - ");
                    useObj = true;
                }
            }
        }

        if (statsEnemy.MP === 0) { if (getRandomInt(10) < 5) { attackCharacter(4, true); } else { defAction(true); } }
        else {
            let intento = 0;
            let ataque = false;
            while (intento != 6) {
                console.log(intento);
                let TEMP_def = getRandomInt((300)).toFixed(0);
                if (TEMP_def < 25) { defAction(true); ataque = true; intento = 5; }
                let numAction = getRandomInt((3)).toFixed(0)
                let TEMP_ataque = combatActions[appState.state.get("getPoder")].ATK[numAction];
                if (!ataque) {
                    if (TEMP_ataque?.HP !== undefined) {
                        console.log(TEMP_ataque);
                        if (TEMP_ataque.MP <= statsEnemy.MP && (TEMP_ataque.HP - statsEnemy.HP) <= 0) {
                            attackCharacter(numAction, true);
                            intento = 5;
                            ataque = true;
                        }
                    } else {
                        console.log(TEMP_ataque);
                        if (TEMP_ataque.MP <= statsEnemy.MP) {
                            attackCharacter(numAction, true);
                            intento = 5;
                            ataque = true;
                        }
                    }
                }
                intento++;
            }
            if (!ataque) {
                if (getRandomInt(10) < 5) { attackCharacter(4, true); } else { defAction(true); }
            }

        }
    }

    useEffect(() => {
        if (state === "ENEMY") {
            const timeoutId = setTimeout(() => {
                setMessage("");
                engineIAEnemy();
                f.addDataGame({ "stateCombat": "WAITENEMY" });
            }, 1000);
            return () => clearTimeout(timeoutId);
        } else if (state === "WAIT") {
            const timeoutId = setTimeout(() => {

                f.removeDataGame(["defenseEnemyCombat"])
                f.addDataGame({ "stateCombat": "ENEMY" });
            }, 4000);
            return () => clearTimeout(timeoutId);
        }
        else if (state === "WAITENEMY") {
            const timeoutId = setTimeout(() => {
                f.removeDataGame(["defenseCombat"])
                f.addDataGame({ "stateCombat": "INIT" });
                f.addDataGame({ "roundCombat": round + 1 })
                f.addDataGame({ "turnCombat": true })
                if (round > 3) {
                    if (round % 2) {
                        f.addDataGameCharacterPrincipal({ MP: statsCharacter.MP + (statsCharacter.statsMax.MP / 10) }, appState.state.get("getPrimarycharacter"));
                        f.addDataGameCharacterPrincipal({ MP: statsEnemy.MP + (statsEnemy.statsMax.MP / 10) }, "enemy")
                    }
                }
                setMessage("");
            }, 4000);
            return () => clearTimeout(timeoutId);
        }
    }, [state, statsEnemy])

    useEffect(() => {
        if (statsCharacter?.HP === 0) {
            setMessage("HAS PERDIDO");
            f.addDataGame({ "stateCombat": "GAMEOVER", "turnCombat": false });
            const timeoutId = setTimeout(() => {
                const progress = appState.state.get("progressDay");
                f.addDataGame({ progress: progress + 1 });
            }, 6000);
            return () => clearTimeout(timeoutId);
        }
        if (statsEnemy?.HP === 0) {
            setMessage("HAS GANADO");
            f.addDataGame({ "stateCombat": "WIN", "turnCombat": false });
            const timeoutId = setTimeout(() => {
                const progress = appState.state.get("progressDay");
                f.addDataGame({ progress: progress + 1 });
            }, 6000);
            return () => clearTimeout(timeoutId);

        }

    }, [statsCharacter, statsEnemy])


    useEffect(() => {
        setStatsCharacter(appState.characters.get(appState.state.get("getPrimarycharacter")));
        setStatsEnemy(appState.characters.get("enemy"));
        setTurn(appState.state.get("getTurnCombat"));
        setState(appState.state.get("getStateCombat"));
        if ((state === "WAITENEMY" || state === "WAIT") && message === "CARGANDO...") {
            setMessage("Sincronizando con el servidor...");
        }
        setRound(appState.state.get("getRoundCombat"))
    }, [appState]);

    const layoutCombat = {
        "PORTRAIT": [
            ["header", { position: "5/5/15/45" }],
            ["panelCombat", {
                position: "56/5/96/45", state: state, stats: statsCharacter,
                round: round, turn: turn, attackCharacter: attackCharacter, defAction: defAction,
                message: message
            }],
            ["characterCombat", { position: "15/5/55/15", turn: turn, stats: statsCharacter, state: state, "enemy": false }],
            ["characterCombat", { position: "15/35/55/40", turn: !turn, stats: statsEnemy, state: state, "enemy": true }]
        ],
        "LANDSCAPE": [
            ["header", { position: "5/40/15/65" }],
            ["panelCombat", {
                position: "56/10/96/90", state: state, stats: statsCharacter,
                round: round, turn: turn, attackCharacter: attackCharacter, defAction: defAction,
                message: message
            }],
            ["characterCombat", { position: "15/10/55/20", turn: turn, stats: statsCharacter, state: state, "enemy": false }],
            ["characterCombat", { position: "15/80/55/90", turn: !turn, stats: statsEnemy, state: state, "enemy": true }]
        ]

    };

    return (
        <>
            <MutableComponent
                display={layoutCombat}
            />
            <AudioPlayer
                autoPlay={true}
                src={music}
                showSkipControls={false}
                showJumpControls={false}
                loop={true}
                style={{ display: 'none' }}
            />
        </>

    )
}
export default GameCombat;
