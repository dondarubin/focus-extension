import React, { useEffect, useRef } from "react";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "./providers/router/AppRouter";
import "./styles/index.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { Footer } from "~widgets/Footer/Footer";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

const App = () => {
    const { theme } = useTheme();
    const documentRef = useRef(document);

    useEffect(() => {
        documentRef.current.addEventListener("click", handleClickOutside);
        
        return () => {
            documentRef.current.removeEventListener("click", handleClickOutside);
        };
    }, [documentRef]);

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

/*useEffect(() => {
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = "";
            // код, который нужно выполнить перед закрытием страницы
            console.log("User is leaving the site");
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);*/