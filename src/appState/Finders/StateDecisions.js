function StatesDecisions(state, parameters) {
    let [action, params] = parameters.split("/");
    state = state.decisions;
    console.log(state);
    console.log(params);
    switch (action) {
        case "getTag":
            return getTagSearch(params);
    }

    function getTagSearch(tag) {
        for (const decision of state) {
            if (decision.hasOwnProperty('data')) {
                for (const item of decision.data) {
                    if (item.includes(tag)) {
                        return true;
                    }
                }
            }
        }
        return false;
    };

}
export default StatesDecisions;