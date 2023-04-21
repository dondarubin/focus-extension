import React, { FC, ReactNode } from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./SessionsDotsIndicator.module.scss";
import { DotIcon } from "~shared/resources/icons/DotIcon";
import { useAppSelector } from "~store";

type SessionsDotsIndicatorProps = {
    className?: string
}

export const SessionsDotsIndicator: FC<SessionsDotsIndicatorProps> = (props) => {

    const allDotsCount = useAppSelector(state => state.settingsValues.sessionsCount);
    //TODO: Refactor this with using redux state
    const coloredDotsCount = 2;

    const dots = Array.from({ length: allDotsCount }, (_, i) => {
        const color = i > coloredDotsCount - 1 ? "white" : "var(--primary-color)";
        return (
            <DotIcon key={i} color={color} />
        );
    });

    return (
        <div className={classNames(styles.dotsContainer, {}, [props.className])}>
            {dots}
        </div>
    );
};