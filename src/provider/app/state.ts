import React from "react";

export interface AppState {
  locale: string;
}

export const initialAppState: AppState = {
  locale: "en-US",
};

export enum ActionType {
  SET_LOCALE,
}

export interface AppActions {
  type: ActionType.SET_LOCALE;
  payload: { locale: string };
}

