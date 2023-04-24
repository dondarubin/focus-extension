import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ModalsNames {
    SETTINGS = "SettingsModal",
    CHOOSE_TASK = "ChooseTaskModal",
    GUIDE = "GuideModal",
    WELCOME = "WelcomeModal",
    ADD_TASK = "AddTaskModal",
    EDIT_TASK = "EditTaskModal",
    ALL_TASK = "AllTaskModal",
    TIMER_END = "TimerEndModal",
}

const ModalsState = {
    [ModalsNames.SETTINGS]: false,
    [ModalsNames.CHOOSE_TASK]: false,
    [ModalsNames.GUIDE]: false,
    [ModalsNames.WELCOME]: true,
    [ModalsNames.ADD_TASK]: false,
    [ModalsNames.EDIT_TASK]: false,
    [ModalsNames.ALL_TASK]: false,
    [ModalsNames.TIMER_END]: false
};

type ModalActionPayload = {
    ModalName: ModalsNames,
    active: boolean
}


const modals = createSlice(
    {
        name: "modal",
        initialState: ModalsState,
        reducers: {
            setModalActive: (state, action: PayloadAction<ModalActionPayload>) => {
                state[action.payload.ModalName] = action.payload.active;
            }
            // setSettingsModalActive: (state, action: PayloadAction<boolean>) => {
            //     state.settingsModalActive = action.payload;
            // },
            // setChooseTaskModalActive: (state, action: PayloadAction<boolean>) => {
            //     state.chooseTaskModalActive = action.payload;
            // },
            // setGuideModalActive: (state, action: PayloadAction<boolean>) => {
            //     state.guideModalActive = action.payload;
            // },
            // setWelcomeModalActive: (state, action: PayloadAction<boolean>) => {
            //     state.welcomeModalActive = action.payload;
            // },
            // setAddTaskModalActive: (state, action: PayloadAction<boolean>) => {
            //     state.addTaskModalActive = action.payload;
            // },
            // setEditTaskModalActive: (state, action: PayloadAction<boolean>) => {
            //     state.editTaskModalActive = action.payload;
            // },
            // setAllTasksModalActive: (state, action: PayloadAction<boolean>) => {
            //     state.allTasksModalActive = action.payload;
            // },
            // setTimerEndModalActive: (state, action: PayloadAction<boolean>) => {
            //     state.timerEndModalActive = action.payload;
            // }
        }
    }
);

export const {
    setModalActive
    // setSettingsModalActive,
    // setChooseTaskModalActive,
    // setGuideModalActive,
    // setWelcomeModalActive,
    // setAddTaskModalActive,
    // setEditTaskModalActive,
    // setAllTasksModalActive,
    // setTimerEndModalActive
} = modals.actions;

export default modals.reducer;
