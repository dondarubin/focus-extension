import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import LocalStorageKeys from "~app/storage/LocalStorageKeys";

export enum AppRotes {
    MAIN = "main",
    TASKS = "tasks",
    BLOCKER = "blocker",
    STATS = "stats",
}

const currentPage = {
    currentPage: AppRotes.MAIN
};

const router = createSlice(
    {
        name: "router",
        initialState: currentPage,
        reducers: {
            setCurrentPage: (state, action: PayloadAction<AppRotes>) => {
                state.currentPage = action.payload;
                localStorage.setItem(LocalStorageKeys.INITIAL_PAGE, action.payload);
            }
        }
    }
);

export const { setCurrentPage } = router.actions;

export default router.reducer;