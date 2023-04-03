import React from "react";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "./providers/router/AppRouter";
import "./styles/index.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { Footer } from "~widgets/Footer/Footer";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <MemoryRouter>
                <AppRouter />
                <Footer />
            </MemoryRouter>
        </div>
    );
};

export default App;