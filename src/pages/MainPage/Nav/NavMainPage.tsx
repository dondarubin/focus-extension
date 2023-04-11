import styles from "./NavMainPage.module.scss";
import { MainIcon } from "~shared/resources/icons/mainIcon/mainIcon";
import {SettingsIcon} from "~shared/resources/icons/settings/settings";
import React, {Dispatch, FC, SetStateAction} from "react";
import {classNames} from "~shared/lib/classNames/classNames";
import { Button, ThemeButton } from "~shared/ui/Button/Button";

interface NavMainPageProps {
    setModalActive: Dispatch<SetStateAction<boolean>>;
    className?: string;
}

export const NavMainPage: FC<NavMainPageProps> = (props) => {
    const {
        className,
        setModalActive
    } = props;

    function OnClickOpenSettingsModalHandler() {
        setModalActive((prev) => !prev)
    }

    return (
        <nav className={classNames(styles.NavMainPage, {}, [className])}>
            <Button className={classNames(styles.iconButtonMain, {}, [])}
                    theme={ThemeButton.CLEAR}>
                <MainIcon/>
            </Button>

            <p className={classNames(styles.title, {}, [])}>walletadress.ada</p>

            <div className={classNames(styles.iconButtonSettingsWrapper)}>
                <Button className={classNames(styles.iconButtonSettings, {}, [])}
                        onClick={OnClickOpenSettingsModalHandler}
                        theme={ThemeButton.CLEAR}>
                    <SettingsIcon />
                </Button>
            </div>
        </nav>
    );
};