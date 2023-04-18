import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Settings } from "~app/types/Settings";

export enum TomatoStates {
    OFF = "OFF",
    FOCUS = "focus",
    SHORT_BREAK = "short break",
    LONG_BREAK = "long break",
}

export type ClockValue = {
    min: number;
    sec: number;
}

type TomatoTimerState = {
    stop: boolean
    currentTaskName: string | undefined
    state: TomatoStates
    clockValue: ClockValue
    currentSessionsCount: number
    settings: Settings
}

const default_settings = {
    shortBreakTime: 5,
    longBreakTime: 15,
    sessionsCount: 4,
    focusTime: 25
} as Settings;

const default_state = {
    stop: false,
    currentTaskName: "test",
    state: TomatoStates.OFF,
    clockValue: { min: 20, sec: 50 },
    currentSessionsCount: 4,
    settings: default_settings
} as TomatoTimerState;


const tomato = createSlice(
    {
        name: "tomato",
        initialState: default_state,
        reducers: {
            setCurrentTaskName: (state, action: PayloadAction<string>) => {
                state.state = TomatoStates.FOCUS;
                state.currentTaskName = action.payload;
            },
            setState: (state, action: PayloadAction<TomatoStates>) => {
                state.state = action.payload;
                state.stop = false;
            },
            setClockValue: (state, action: PayloadAction<ClockValue>) => {
                state.clockValue = action.payload;
            },
            setCurrentSessionsCount: (state, action: PayloadAction<number>) => {
                state.currentSessionsCount = action.payload;
            },
            setStop: (state, action: PayloadAction<boolean>) => {
                state.stop = action.payload;
            }
        }
    }
);

export const { setCurrentTaskName, setCurrentSessionsCount, setStop, setState, setClockValue } = tomato.actions;

export default tomato.reducer;