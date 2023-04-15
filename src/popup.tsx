import App from "~app/App";
import ThemeProvider from "~app/providers/ThemeProvider/ThemeProvider";
import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "~store";
import { PersistGate } from "@plasmohq/redux-persist/es/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function IndexPopup() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <ThemeProvider>
                    <ToastContainer />
                    <App />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default IndexPopup;
