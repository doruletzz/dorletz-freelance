"use client";

import React, { createContext, ReactNode, useReducer } from "react";
import { appReducer } from "./reducer";
import { initialAppState } from "./state";
import { AppContext } from "./context";

export default function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
