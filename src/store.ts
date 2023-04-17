import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    RESYNC,
    persistReducer,
    persistStore, createMigrate
} from "@plasmohq/redux-persist";
import { Storage } from "@plasmohq/storage";
import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { syncStorage } from "redux-persist-webextension-storage";

import blockedAddresses from "~app/reducers/blockedAddresses-slice";
import settings from "~app/reducers/settings-slice";
import router from "~app/reducers/router-slice";
import tomato, { TomatoStates } from "~app/reducers/tomato-slice";

// Here you can add all your reducers
const combinedReducers = combineReducers({
    blockedAddresses: blockedAddresses,
    settingsValues: settings,
    tomato: tomato,
    router: router
});

const persistConfig = {
    key: "root",
    version: 3,
    storage: syncStorage,
    enabled: false
};


// TODO: Fix persistReducer so it doesn't break the types
const persistedReducer = persistReducer(persistConfig, combinedReducers);

// Until persistReducer is fixed, we need to use this mock store to get the types
const mockStore = configureStore({
    reducer: combinedReducers
});

// @ts-ignore
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                    RESYNC
                ]
            }
        })
}) as typeof mockStore;

export const persistor = persistStore(store);

// TODO: DELETE IN PROD!
const defaultState = {
    blockedAddresses: {
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
    },
    settings: {
        shortBreakTime: 5,
        longBreakTime: 15,
        sessionsCount: 4,
        focusTime: 25
    },
    tomato: {
        stop: true,
        currentTaskName: "test",
        state: TomatoStates.OFF,
        clockValue: { min: 20, sec: 50 },
        currentSessionsCount: 4
    }
};

export const resetStore = () => {
    return new Promise<void>((resolve, reject) => {
        persistStore(
            createStore(
                persistedReducer,
                defaultState,
                // @ts-ignore
                () => {
                    resolve();
                }
            )
        ).purge();
    });
};
/*resetStore();
persistor.purge()*/
// TODO: DELETE IN PROD!

// This is what makes Redux sync properly with multiple pages
// Open your extension's options page and popup to see it in action
new Storage().watch({
    [`persist:${persistConfig.key}`]: () => {
        persistor.resync();
    }
});

// Get the types from the mock store
export type RootState = ReturnType<typeof mockStore.getState>
export type AppDispatch = typeof mockStore.dispatch

// Export the hooks with the types from the mock store
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;