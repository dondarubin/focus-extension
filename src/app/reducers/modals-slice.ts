import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalsState = {
    settingsModalActive: boolean;
    chooseTaskModalActive: boolean;
    guideModalActive: boolean;
    welcomeModalActive: boolean;
    addTaskModalActive: boolean;
    editTaskModalActive: boolean;
    allTasksModalActive: boolean;
}

const initialState: ModalsState = {
    settingsModalActive: false,
    chooseTaskModalActive: false,
    guideModalActive: false,
    welcomeModalActive: true,
    addTaskModalActive: false,
    editTaskModalActive: false,
    allTasksModalActive: false
};


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
            },
            setAddTaskModalActive: (state, action: PayloadAction<boolean>) => {
                state.addTaskModalActive = action.payload;
            },
            setEditTaskModalActive: (state, action: PayloadAction<boolean>) => {
                state.editTaskModalActive = action.payload;
            },
            setAllTasksModalActive: (state, action: PayloadAction<boolean>) => {
                state.allTasksModalActive = action.payload;
            }
        }
    }
);

export const {
    setSettingsModalActive,
    setChooseTaskModalActive,
    setGuideModalActive,
    setWelcomeModalActive,
    setAddTaskModalActive,
    setEditTaskModalActive,
    setAllTasksModalActive
} = modals.actions;

export default modals.reducer;
