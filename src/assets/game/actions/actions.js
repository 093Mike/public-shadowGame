import Firebase from '../../../FirebaseEngine/firebase';


const addVida = (appState, props) => {
    const f = new Firebase();
    const principal = appState.state.get("getPrimarycharacter");
    const stats = appState.characters.get(principal);
    if (stats.statsMax.HP !== stats.HP) {
        if ((stats.HP + props.vida) > stats.statsMax.HP) {
            f.addDataGameCharacterPrincipal({ HP: stats.statsMax.HP }, principal)
        } else {
            f.addDataGameCharacterPrincipal({ HP: (stats.HP + props.vida) }, principal)
        }
    }
}

const addVidaEnemy = (appState, props) => {
    const f = new Firebase();
    const stats = appState.characters.get("enemy");
    if (stats.statsMax.HP !== stats.HP) {
        if ((stats.HP + props.vida) > stats.statsMax.HP) {
            f.addDataGameCharacterPrincipal({ HP: stats.statsMax.HP }, "enemy")
        } else {
            f.addDataGameCharacterPrincipal({ HP: (stats.HP + props.vida) }, "enemy")
        }
    }
}



const removeVida = (appState, props) => {
    const f = new Firebase();
    const principal = appState.state.get("getPrimarycharacter");
    const stats = appState.characters.get(principal);
    if (stats.statsMax.HP === 0) {
        f.addDataGameCharacterPrincipal({ HP: 0 }, principal)
    } else {
        if ((stats.HP - props.vida) <= 0) {
            f.addDataGameCharacterPrincipal({ HP: 0 }, principal)
        } else {
            f.addDataGameCharacterPrincipal({ HP: (stats.HP - props.vida) }, principal)
        }
    }
}

const removeVidaEnemy = (appState, props) => {
    const f = new Firebase();
    const stats = appState.characters.get("enemy");
    if (stats.statsMax.HP === 0) {
        f.addDataGameCharacterPrincipal({ HP: 0 }, "enemy")
    } else {
        if ((stats.HP - props.vida) <= 0) {
            f.addDataGameCharacterPrincipal({ HP: 0 }, "enemy")
        } else {
            f.addDataGameCharacterPrincipal({ HP: (stats.HP - props.vida) }, "enemy")
        }
    }
}

const addMP = (appState, props) => {
    const f = new Firebase();
    const principal = appState.state.get("getPrimarycharacter");
    const stats = appState.characters.get(principal);
    if (stats.statsMax.MP !== stats.MP) {
        if ((stats.MP + props.mp) > stats.statsMax.MP) {
            f.addDataGameCharacterPrincipal({ MP: stats.statsMax.MP }, principal)
        } else {
            f.addDataGameCharacterPrincipal({ MP: (stats.MP + props.mp) }, principal)
        }
    }
}

const removeMP = (appState, props) => {
    const f = new Firebase();
    const principal = appState.state.get("getPrimarycharacter");
    const stats = appState.characters.get(principal);
    if (stats.statsMax.MP === 0) {
        f.addDataGameCharacterPrincipal({ MP: 0 }, principal)
    } else {
        if ((stats.MP - props.mp) <= 0) {
            f.addDataGameCharacterPrincipal({ MP: 0 }, principal)
        } else {
            f.addDataGameCharacterPrincipal({ MP: (stats.MP - props.mp) }, principal)
        }
    }
}
const addMPEnemy = (appState, props) => {
    const f = new Firebase();
    const stats = appState.characters.get("enemy");
    if (stats.statsMax.MP !== stats.MP) {
        if ((stats.MP + props.mp) > stats.statsMax.MP) {
            f.addDataGameCharacterPrincipal({ MP: stats.statsMax.MP }, "enemy")
        } else {
            f.addDataGameCharacterPrincipal({ MP: (stats.MP + props.mp) }, "enemy")
        }
    }
}

const removeMPEnemy = (appState, props) => {
    const f = new Firebase();
    const stats = appState.characters.get("enemy");
    if (stats.statsMax.MP === 0) {
        f.addDataGameCharacterPrincipal({ MP: 0 }, "enemy")
    } else {
        if ((stats.MP - props.mp) <= 0) {
            f.addDataGameCharacterPrincipal({ MP: 0 }, "enemy")
        } else {
            f.addDataGameCharacterPrincipal({ MP: (stats.MP - props.mp) }, "enemy")
        }
    }
}

const anadirPoder = (appState,props) => {
    const f = new Firebase();
    console.log(props);
    f.addDataGame({poder:props?.poder})
}



let actions = {
    0: addVida,
    1: removeVida,
    2: anadirPoder,
    3: removeMP,
    4: removeVidaEnemy,
    5: removeMPEnemy,
    6: addMP,
    7: addMPEnemy,
    8: addVidaEnemy

}

export default actions;