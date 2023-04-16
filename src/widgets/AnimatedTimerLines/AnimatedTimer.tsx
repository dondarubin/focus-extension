import React, { FC } from "react";
import styles from "./AnimatedTimer.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { TimerLinesIcon } from "~shared/resources/icons/timer/TimerLinesIcon";
import { TimerArrowIcon } from "~shared/resources/icons/timer/TimerArrorIcon";

type AnimatedTimerProps = {
    className?: string
}

export const AnimatedTimer: FC<AnimatedTimerProps> = (props) => {
    const {
        className
    } = props;

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <TimerArrowIcon color={"var(--secondary-color)"} />
            <div className={classNames(styles.timerIcon)}>
                <TimerLinesIcon />
            </div>
        </div>
    );
};