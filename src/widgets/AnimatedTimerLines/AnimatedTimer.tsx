import React, { FC } from "react";
import styles from "./AnimatedTimer.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { TimerArrowIcon } from "~shared/resources/icons/timer/TimerArrorIcon";
import Marquee from "react-fast-marquee";
import { TimerLinesMiniIcon } from "~shared/resources/icons/timer/TimerLinesMiniIcon";
import { useAppSelector } from "~store";

type AnimatedTimerProps = {
    className?: string
}

export const AnimatedTimer: FC<AnimatedTimerProps> = (props) => {

    const isStop = useAppSelector(state => state.tomato.stop);

    const {
        className
    } = props;

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <TimerArrowIcon color={"var(--secondary-color)"} />
            <div className={classNames(styles.timerIcon)}>
                <Marquee
                    play={!isStop}
                    speed={15}
                    gradient={false}
                >
                    <div style={{ marginRight: "8px" }}>
                        <TimerLinesMiniIcon />
                    </div>
                    <div style={{ marginRight: "8px" }}>
                        <TimerLinesMiniIcon />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};