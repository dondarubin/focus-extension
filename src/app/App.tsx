import React from "react";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "./providers/router/AppRouter";
import "./styles/index.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { Footer } from "~widgets/footer/Footer";

const App = () => {
    return (
        <div className={classNames("app", {}, [])}>
            <MemoryRouter>
                <AppRouter />
                 <Footer/>
            </MemoryRouter>
        </div>
    );
};

export default App;