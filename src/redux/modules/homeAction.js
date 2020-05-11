import { createAction, handleActions } from "redux-actions";

// actions
const Actions = {
  "WEB_HOME_ART":"WEB_HOME_ART",
};

export const homeArtActions = createAction(
  Actions.WEB_HOME_ART,
  value => ({
    value
  })
);

// state 
const state = {
  artLists: {}
}

// reducer
const actions = { };

actions[Actions.WEB_HOME_ART] = (state, actions) => {
  return {
    ...state,
    artLists: actions.payload.value,
  }
}

const reducer = handleActions(actions, state);
export default reducer;