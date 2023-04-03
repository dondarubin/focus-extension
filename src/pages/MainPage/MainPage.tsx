import React from "react";
import { ThemeSwitcher } from "~widgets/ThemeSwitcher/ThemeSwitcher";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { classNames } from "~shared/lib/classNames/classNames";
import style from "./MainPage.module.scss";

const MainPage = () => {
    return (
        <div>
            Main Page
            <br />
            <br />
            <br />
            <ThemeSwitcher />
            <br />
            <br />
            <br />
            <Button theme={ThemeButton.DEFAULT} className={classNames(style.button, {}, [])}>
                Save
            </Button>
        </div>
    );
};

export default MainPage;