import styles from "./NavMainPage.module.scss";
import { MainIcon } from "~shared/resources/icons/mainIcon/mainIcon";
import { SettingsIcon } from "~shared/resources/icons/settings/settings";
import React from "react";
import { classNames } from "~shared/lib/classNames/classNames";

interface NavMainPageProps {
    className?: string;
}

export const NavMainPage = ({ className }: NavMainPageProps) => {
    return (
        <nav className={classNames(styles.NavMainPage, {}, [className])}>
            <div className={classNames(styles.iconWrapper, {}, [])}>
                <MainIcon />
            </div>

            <p className={classNames(styles.title, {}, [])}>walletadress.ada</p>

            <div className={classNames(styles.iconWrapper, {}, [])}>
                <SettingsIcon />
            </div>
        </nav>
    );
};