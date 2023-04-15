import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { BlockedAddress } from "~app/types/BlockedAddress";
import produce from "immer";
import { toast } from "react-toastify";

type BlockedAddressesState = {
    allBlocked: boolean;
    addresses: BlockedAddress[]
};

const mock_addresses = {
    allBlocked: false,
    addresses: [
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
    ]
};

function allBlocked(addresses: BlockedAddress[]) {
    for (let i = 0; i < addresses.length; i++) {
        if (addresses[i].blocked === false) {
            return false;
        }
    }
    return true;
}

const blockedAddresses = createSlice({
    name: "blockAddresses",
    initialState: mock_addresses as BlockedAddressesState,
    reducers: {
        addAddress: (state, action: PayloadAction<BlockedAddress>) => {
            const index = state.addresses.findIndex(address => address.addr === action.payload.addr);
            if (index === -1) {
                state.addresses.unshift(action.payload);
            } else {
                toast.warn(`${action.payload.addr} is already exists`);
                console.warn(`${action.payload.addr} is already exists`);
            }
        },
        removeAddress: (state, action: PayloadAction<string>) => {
            const addresses = state.addresses.filter(address => address.addr !== action.payload);
            return {
                allBlocked: allBlocked(addresses),
                addresses: addresses
            };
        },
        updateAddress: (state, action: PayloadAction<BlockedAddress>) => {
            const { addresses } = state;
            const { payload } = action;

            const updatedAddresses = addresses.map(address =>
                address.addr === payload.addr ? payload : address
            );

            return {
                ...state,
                allBlocked: allBlocked(updatedAddresses),
                addresses: updatedAddresses
            };
        },
        blockAll: (state, action: PayloadAction<boolean>) => {
            return {
                allBlocked: action.payload,
                addresses: state.addresses.map((address) => {
                    return {
                        ...address,
                        blocked: action.payload
                    };
                })
            };
        }
    }
});

export const { addAddress, removeAddress, updateAddress, blockAll } = blockedAddresses.actions;

export default blockedAddresses.reducer;