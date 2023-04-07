import styles from "./NavMainPage.module.scss";
import { MainIcon } from "~shared/resources/icons/mainIcon/mainIcon";
import { SettingsIcon } from "~shared/resources/icons/settings/settings";
import React, { FC } from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import { Button, ThemeButton } from "~shared/ui/Button/Button";

interface NavMainPageProps {
    setModalActive: (arg: boolean) => void;
    className?: string;
}

export const NavMainPage: FC<NavMainPageProps> = (props) => {
    const {
        className,
        setModalActive
    } = props;

    return (
        <nav className={classNames(styles.NavMainPage, {}, [className])}>
            <Button className={classNames(styles.iconWrapper, {}, [])}
                    theme={ThemeButton.CLEAR}>
                <MainIcon />
            </Button>

            <p className={classNames(styles.title, {}, [])}>walletadress.ada</p>

            <Button className={classNames(styles.iconWrapper, {}, [])}
                    onClick={() => setModalActive(true)}
                    theme={ThemeButton.CLEAR}>
                <SettingsIcon />
            </Button>
        </nav>
    );
};