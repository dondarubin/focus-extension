import styles from "./NavMainPage.module.scss";
import { MainIcon } from "~shared/resources/icons/mainIcon/mainIcon";
import {SettingsIcon} from "~shared/resources/icons/settings/settings";
import React, {Dispatch, FC, SetStateAction} from "react";
import {classNames} from "~shared/lib/classNames/classNames";
import { Button, ThemeButton } from "~shared/ui/Button/Button";

interface NavMainPageProps {
    setSettingsModalActive: Dispatch<SetStateAction<boolean>>;
    className?: string;
}

export const NavMainPage: FC<NavMainPageProps> = (props) => {
    const {
        className,
        setSettingsModalActive
    } = props;

    function OnClickOpenSettingsModalHandler() {
        setSettingsModalActive((prev) => !prev);
    }

    return (
        <nav className={classNames(styles.NavMainPage, {}, [className])}>
            <Button className={styles.iconButtonMain}
                    theme={ThemeButton.CLEAR}>
                <MainIcon />
            </Button>

            <p className={styles.title}>walletadress.ada</p>

            <div className={styles.iconButtonSettingsWrapper}>
                <Button className={styles.iconButtonSettings}
                        onClick={OnClickOpenSettingsModalHandler}
                        theme={ThemeButton.CLEAR}>
                    <SettingsIcon />
                </Button>
            </div>
        </nav>
    );
};