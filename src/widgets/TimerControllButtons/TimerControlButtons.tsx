import React, { FC } from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { CloseIcon } from "~shared/resources/icons/close/CloseIcon";
import styles from "./TimerControlButtons.module.scss";
import { BigMarkIcon } from "~shared/resources/icons/BigMarkIcon";
import { PauseIcon } from "~shared/resources/icons/PauseIcon";

type TimerControlButtonsProps = {
    className?: string,
    onExit: () => void,
    onPause: () => void,
    onDone: () => void
}

export const TimerControlButtons: FC<TimerControlButtonsProps> = (props) => {
    const {
        className,
        onPause,
        onDone,
        onExit
    } = props;

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Button className={classNames(styles.button, {}, [styles.whiteBg])} theme={ThemeButton.DEFAULT}
                    onClick={onExit}>
                <CloseIcon />
            </Button>
            <Button className={styles.button} theme={ThemeButton.DEFAULT} onClick={onPause}>
                <PauseIcon />
            </Button>
            <Button className={classNames(styles.button, {}, [styles.whiteBg])} theme={ThemeButton.DEFAULT}
                    onClick={onDone}>
                <BigMarkIcon />
            </Button>
        </div>
    );
};