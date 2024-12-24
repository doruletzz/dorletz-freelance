import React from "react";
import { AppActions, AppState, initialAppState } from "./state";


export const AppContext = React.createContext<{
    state: AppState;
    dispatch: React.Dispatch<AppActions>;
  }>({
    state: initialAppState,
    dispatch: () => undefined,
  });
  