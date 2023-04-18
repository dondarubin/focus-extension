import React, { FC } from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { CloseIcon } from "~shared/resources/icons/close/CloseIcon";
import styles from "./TimerControlButtons.module.scss";
import { BigMarkIcon } from "~shared/resources/icons/BigMarkIcon";
import { PauseIcon } from "~shared/resources/icons/PauseIcon";
import { useAppDispatch, useAppSelector } from "~store";
import { setState, setStop, TomatoStates } from "~app/reducers/tomato-slice";
import { PlayIcon } from "~shared/resources/icons/PlayIcon";

type TimerControlButtonsProps = {
    className?: string,
}

export const TimerControlButtons: FC<TimerControlButtonsProps> = (props) => {
    const {
        className
    } = props;

    const dispatch = useAppDispatch();
    const isStop = useAppSelector(state => state.tomato.stop);

    function onExit() {
        dispatch(setState(TomatoStates.OFF));
    }

    function onPause() {
        dispatch(setStop(!isStop));
    }

    function onDone() {

    }

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Button className={classNames(styles.button, {}, [styles.whiteBg])} theme={ThemeButton.DEFAULT}
                    onClick={onExit}>
                <CloseIcon />
            </Button>
            <Button className={styles.button} theme={ThemeButton.DEFAULT} onClick={onPause}>
                {!isStop ? <PauseIcon /> : <PlayIcon />}
            </Button>
            <Button className={classNames(styles.button, {}, [styles.whiteBg])} theme={ThemeButton.DEFAULT}
                    onClick={onDone}>
                <BigMarkIcon />
            </Button>
        </div>
    );
};