import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
}

const default_state = {
    stop: true,
    currentTaskName: "test",
    state: TomatoStates.OFF,
    clockValue: { min: 20, sec: 50 },
    currentSessionsCount: 4
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