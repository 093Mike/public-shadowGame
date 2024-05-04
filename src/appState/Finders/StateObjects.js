function StateObjects(state, parameters) {
    let [action, params] = parameters.split("/");
    console.log(state);

    state = state.objects;
    console.log(state[0].FOOD);

    switch (action) {
        case "getFood":
            return getFood();
    }
    function getFood() {
        return state[0].FOOD;
    }

}
export default StateObjects;