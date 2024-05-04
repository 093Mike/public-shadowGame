
function StatesCharacters(state, parameters) {
    let [action, params] = parameters.split("/");

    state = state.characters;

    switch (action) {
        case "aron":
            return getStatsAron();
        case "enemy":
            return getStatsEnemy();
    }

    function getStatsAron() {
        return state[0];
    }
    function getStatsEnemy() {
        return state[1];
    }
}
export default StatesCharacters;