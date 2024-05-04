function AppStateReducer(state, [key, param]) {
    return {...state, [key]:param};
  }
  
  export default AppStateReducer;