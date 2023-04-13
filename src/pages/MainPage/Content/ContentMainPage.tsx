import styles from "./ContentMainPage.module.scss";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import React, { Dispatch, FC, SetStateAction } from "react";
import { classNames } from "~shared/lib/classNames/classNames";

interface ContentMainPageProps {
    className?: string;
    setChooseTaskModalActive?: Dispatch<SetStateAction<boolean>>;
}

export const ContentMainPage:FC<ContentMainPageProps> = (props) => {
    const {
        className,
        setChooseTaskModalActive,
    } = props;

    function OnClickOpenChooseTaskModalHandler() {
        setChooseTaskModalActive((prev) => !prev)
    }

    return (
        <div className={classNames(styles.ContentMainPage, {}, [className])}>
            <p className={classNames(styles.time, {}, [])}>25:00</p>
            <Button
                theme={ThemeButton.DEFAULT}
                className={classNames(styles.button, {}, [])}
                onClick={OnClickOpenChooseTaskModalHandler}
            >
                Start
            </Button>
        </div>
    );
};