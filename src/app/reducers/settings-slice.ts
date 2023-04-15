import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Settings } from "~app/types/Settings";

const default_settings = {
    shortBreak: 5,
    longBreak: 15,
    sessions: 4,
    focus: 25
} as Settings;


const settings = createSlice(
    {
        name: "settings",
        initialState: default_settings as Settings,
        reducers: {
            setShortBreak: (state, action: PayloadAction<number>) => {
                return {
                    ...state,
                    shortBreak: action.payload
                };
            },
            setLongBreak: (state, action: PayloadAction<number>) => {
                return {
                    ...state,
                    longBreak: action.payload
                };
            },
            setSessions: (state, action: PayloadAction<number>) => {
                return {
                    ...state,
                    sessions: action.payload
                };
            },
            setFocus: (state, action: PayloadAction<number>) => {
                return {
                    ...state,
                    focus: action.payload
                };
            }
        }
    }
);

export const { setLongBreak, setShortBreak, setSessions, setFocus } = settings.actions;

export default settings.reducer;