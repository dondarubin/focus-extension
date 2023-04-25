import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const isScrolled = false;

const statsPageScroll = createSlice(
    {
        name: "statsPageScroll",
        initialState: isScrolled,
        reducers: {
            setIsScrolled: (state, action: PayloadAction<boolean>) => {
                return action.payload;
            }
        }
    }
);

export const { setIsScrolled } = statsPageScroll.actions;

export default statsPageScroll.reducer;