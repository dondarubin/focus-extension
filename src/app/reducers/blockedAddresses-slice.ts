import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { BlockedAddress } from "~app/types/BlockedAddress";

type BlockedAddressesState = BlockedAddress[];

const mock_addresses = [
    {
        addr: "vk.com",
        blocked: false
    },
    {
        addr: "mama.ru",
        blocked: true
    },
    {
        addr: "ddpornhub.com",
        blocked: false
    },
    {
        addr: "pornhub.com",
        blocked: false
    },
    {
        addr: "pornhubd.com",
        blocked: true
    },
    {
        addr: "pornfhub.com",
        blocked: false
    },
    {
        addr: "pornshub.com",
        blocked: false
    },
    {
        addr: "pofrnhub.com",
        blocked: true
    }
] as BlockedAddressesState;

const blockedAddresses = createSlice({
    name: "blockAddresses",
    initialState: mock_addresses as BlockedAddressesState,
    reducers: {
        addAddress: (state, action: PayloadAction<BlockedAddress>) => {
            state.push(action.payload);
        },
        removeAddress: (state, action: PayloadAction<string>) => {
            return state.filter(address => address.addr !== action.payload);
        },
        updateAddress: (state, action: PayloadAction<BlockedAddress>) => {
            const index = state.findIndex(address => address.addr === action.payload.addr);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    }
});

export const { addAddress, removeAddress, updateAddress } = blockedAddresses.actions;

export default blockedAddresses.reducer;