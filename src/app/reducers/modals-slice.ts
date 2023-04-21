import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalsState = {
    settingsModalActive: boolean;
    chooseTaskModalActive: boolean;
    guideModalActive: boolean;
    welcomeModalActive: boolean;
}

const initialState = {
    settingsModalActive: false,
    chooseTaskModalActive: false,
    guideModalActive: false,
    welcomeModalActive: true,
} as ModalsState;


const modals = createSlice(
    {
        name: "modal",
        initialState: initialState,
        reducers: {
            setSettingsModalActive: (state, action: PayloadAction<boolean>) => {
                state.settingsModalActive = action.payload;
            },
            setChooseTaskModalActive: (state, action: PayloadAction<boolean>) => {
                state.chooseTaskModalActive = action.payload;
            },
            setGuideModalActive: (state, action: PayloadAction<boolean>) => {
                state.guideModalActive = action.payload;
            },
            setWelcomeModalActive: (state, action: PayloadAction<boolean>) => {
                state.welcomeModalActive = action.payload;
            }
        }
    }
);

export const {
    setSettingsModalActive,
    setChooseTaskModalActive,
    setGuideModalActive,
    setWelcomeModalActive
} = modals.actions;

export default modals.reducer;
