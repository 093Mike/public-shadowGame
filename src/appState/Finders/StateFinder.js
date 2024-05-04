
function StateFinder(state, parameters) {
    let [action, params] = parameters.split("/");

    state = state.state;
    switch (action) {
        case "progressDay":
            return getProgressDay();
        case "gameMode":
            return getGameMode();
        case "dayChapter":
            return getDayOfChapter();
        case "numChapter":
            return getNumChapter();
        case "getTag":
            return getTag();
        case "getName":
            return getName();
        case "getPrimarycharacter":
            return getPrimaryCharacter();
        case "getPoder":
            return getPoder();
        case "getStateCombat":
            return getStateCombat();
        case "getTurnCombat":
            return getTurnCombat();
        case "getRoundCombat":
            return getRoundCombat();
        case "getDefenseCombat":
            return getDefenseCombat();
        case "getDefenseEnemyCombat":
            return getDefenseEnemyCombat();
        case "getNumObjectsEnemy":
            return getNumObjectsEnemy();
    }

    function getDayOfChapter() {
        return state.day;
    }
        
    function getNumChapter(){
        if(state.chapter === 0 ){
            return "Prologo"
        }
        return "Cap. " + state.chapter;
    }

    function getGameMode(){
        return state.state;
    }

    function getProgressDay(){
        return state.progress;
    }

    function getTag(){
        return state.lastDecision;
    };

    function getName(){
        return state.name;
    };

    function getPrimaryCharacter(){
        return state.primarycharacter;
    };

    function getPoder(){
        return state.poder;
    };

    function getStateCombat(){
        return state.stateCombat;
    };

    function getTurnCombat(){
        return state.turnCombat;
    };

    function getRoundCombat(){
        return state.roundCombat;
    };

    
    function getDefenseCombat(){
        return state.defenseCombat;
    };

    function getDefenseEnemyCombat(){
        return state.defenseEnemyCombat;
    };

    function getNumObjectsEnemy(){
        return state.objectsEnemy;
    };
    

}

export default StateFinder;