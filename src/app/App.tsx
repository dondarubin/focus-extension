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

    function handleTabKeyClick(e: KeyboardEvent) {
        if (e.key === "Tab") {
            e.preventDefault();
        }
    }

    useEffect(() => {
        documentRef.current.addEventListener("keydown", handleTabKeyClick);

        return () => {
            documentRef.current.removeEventListener("keydown", handleTabKeyClick);
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