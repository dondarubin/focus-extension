import React, { FC, ReactNode } from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./TomatoStateInfo.module.scss";
import { DotIcon } from "~shared/resources/icons/DotIcon";

type SessionsDotsIndicatorProps = {
    className?: string
    allDotsCount: number
    coloredDotsCount: number
}

export const SessionsDotsIndicator: FC<SessionsDotsIndicatorProps> = (props) => {
    const {
        allDotsCount,
        coloredDotsCount
    } = props;

    const dots = Array.from({ length: allDotsCount }, (_, i) => {
        const color = i > coloredDotsCount - 1 ? "white" : "var(--primary-color)";
        return (
            <DotIcon key={i} color={color} />
        );
    });

    return (
        <div className={classNames(styles.dotsContainer)}>
            {dots}
        </div>
    );
};