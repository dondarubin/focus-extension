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
    REWARDS = "Rewards",
}

const ModalsState = {
    [ModalsNames.SETTINGS]: false,
    [ModalsNames.CHOOSE_TASK]: false,
    [ModalsNames.GUIDE]: false,
    [ModalsNames.WELCOME]: true,
    [ModalsNames.ADD_TASK]: false,
    [ModalsNames.EDIT_TASK]: false,
    [ModalsNames.ALL_TASK]: false,
    [ModalsNames.TIMER_END]: false,
    [ModalsNames.REWARDS]: false
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
        }
    }
);

export const {
    setModalActive
} = modals.actions;

export default modals.reducer;
