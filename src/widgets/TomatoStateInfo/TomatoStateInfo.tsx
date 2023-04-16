import React, { FC } from "react";
import styles from "./TomatoStateInfo.module.scss";
import { useAppSelector } from "~store";

type TomatoStateInfoProps = {}

export const TomatoStateInfo: FC<TomatoStateInfoProps> = (props) => {
    const {} = props;

    const currentTomatoState = useAppSelector(state => state.tomato.state);
    const currentTaskName = useAppSelector(state => state.tomato.currentTaskName);
    const settingsSessionsCount = useAppSelector(state => state.settingsValues.sessionsCount);

    return (
        <div className={styles.container}>
            <div className={styles.tomatoStateName}>
                {currentTomatoState.toUpperCase()}
            </div>
            <div className={styles.taskName}>
                {currentTaskName}
            </div>
        </div>
    );
};