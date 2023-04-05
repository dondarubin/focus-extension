import React from "react";
import { ThemeSwitcher } from "~widgets/ThemeSwitcher/ThemeSwitcher";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { classNames } from "~shared/lib/classNames/classNames";
import style from "./MainPage.module.scss";
import { SelectFocusTime } from "~widgets/SelectFocusTime/SelectFocusTime";
import { MainIcon } from "~shared/resources/icons/mainIcon/mainIcon";
import { SettingsIcon } from "~shared/resources/icons/settings/settings";

const MainPage = () => {
    return (
        <div className={classNames(style.main, {}, [])}>
            <nav className={classNames(style.nav, {}, [])}>
                <MainIcon />
                <p className={classNames(style.name, {}, [])}>walletadress.ada</p>
                <SettingsIcon />
            </nav>
            <div className={classNames(style.content, {}, [])}>
                <p className={classNames(style.time, {}, [])}>25:00</p>
                <Button theme={ThemeButton.DEFAULT} className={classNames(style.button, {}, [])}>
                    Save
                </Button>
            </div>
        </div>
    );
};

export default MainPage;