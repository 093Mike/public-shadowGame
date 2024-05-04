import { useReducer } from "react";
import AppStateReducer from "./AppStateReducer";
import StateFinder from "./Finders/StateFinder.js";
import StatesDecisions from "./Finders/StateDecisions.js";
import StatesCharacters from "./Finders/StatesCharacters.js";
import StateObjects from "./Finders/StateObjects.js";

const useAppState = () => {
  const [state, dispatch] = useReducer(AppStateReducer, {});
  return {
    state: {
      get: (query) => {
        try {
          return StateFinder(state, query);
        } catch (e) {
          //console.log("ERROR", e);
          return null;
        }
      },
      set: (param) => {
        return dispatch(['state', param]);
      },
    },
    decisions: {
      get: (query) => {
        console.log(state);
        try {
          return StatesDecisions(state, query);
        } catch (e) {
          //console.log("ERROR", e);
          return null;
        }
      },
      set: (param) => {
        return dispatch(['decisions', param]);
      },
    },
    characters: {
      get: (query) => {
        try {
          return StatesCharacters(state, query);
        } catch (e) {
          //console.log("ERROR", e);
          return null;
        }
      },
      set: (param) => {
        return dispatch(['characters', param]);
      },
    },
    objects: {
      get: (query) => {
        try {
          return StateObjects(state, query);
        } catch (e) {
          //console.log("ERROR", e);
          return null;
        }
      },
      set: (param) => {
        return dispatch(['objects', param]);
      },
    }
    
  };
};

export default useAppState;
