import { ActionType, AppActions, AppState } from "./state";

export function appReducer(state: AppState, action: AppActions): AppState {
  switch (action.type) {
    case ActionType.SET_LOCALE:
      return { ...state, locale: action.payload.locale };

    default:
      return state;
  }
}
