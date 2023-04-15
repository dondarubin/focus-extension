import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Settings } from "~app/types/Settings";

const default_settings = {
    shortBreakTime: 5,
    longBreakTime: 15,
    sessionsCount: 4,
    focusTime: 25
} as Settings;


const settings = createSlice(
    {
        name: "settings",
        initialState: default_settings as Settings,
        reducers: {
            setShortBreakTime: (state, action: PayloadAction<number>) => {
                return {
                    ...state,
                    shortBreakTime: action.payload
                };
            },
            setLongBreakTime: (state, action: PayloadAction<number>) => {
                return {
                    ...state,
                    longBreakTime: action.payload
                };
            },
            setSessionsCount: (state, action: PayloadAction<number>) => {
                return {
                    ...state,
                    sessionsCount: action.payload
                };
            },
            setFocusTime: (state, action: PayloadAction<number>) => {
                return {
                    ...state,
                    focusTime: action.payload
                };
            }
        }
    }
);

export const { setLongBreakTime, setShortBreakTime, setSessionsCount, setFocusTime } = settings.actions;

export default settings.reducer;