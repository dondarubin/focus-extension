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
        <div className={classNames("main", {}, [])}>
            <nav className={classNames(style.nav, {}, [])}>
                <MainIcon />
                <p className={classNames(style.name, {}, [])}>walletadress.ada</p>
                <SettingsIcon />
            </nav>

            {/*Main Page*/}
            {/*<br />*/}
            {/*<br />*/}
            {/*<br />*/}
            {/*<ThemeSwitcher />*/}
            {/*<br />*/}
            {/*<br />*/}
            {/*<br />*/}
            {/*<SelectFocusTime />*/}
            {/*<br />*/}
            {/*<br />*/}
            {/*<br />*/}
            {/*<Button theme={ThemeButton.DEFAULT} className={classNames(style.button, {}, [])}>*/}
            {/*    Save*/}
            {/*</Button>*/}
        </div>
    );
};

export default MainPage;