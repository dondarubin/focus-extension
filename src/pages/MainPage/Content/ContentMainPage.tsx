import styles from "./ContentMainPage.module.scss";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import React from "react";
import { classNames } from "~shared/lib/classNames/classNames";

interface ContentMainPageProps {
    className?: string;
}

export const ContentMainPage = ({ className }: ContentMainPageProps) => {
    return (
        <div className={classNames(styles.ContentMainPage, {}, [className])}>
            <p className={classNames(styles.time, {}, [])}>25:00</p>
            <Button theme={ThemeButton.DEFAULT} className={classNames(styles.button, {}, [])}>
                Start
            </Button>
        </div>
    );
};