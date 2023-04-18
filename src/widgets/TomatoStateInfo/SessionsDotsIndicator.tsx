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

    const _dots = () => {
        const dots: ReactNode[] = [];
        for (let i = 0; i < allDotsCount; i++) {
            const color = i > coloredDotsCount - 1 ? "white" : "var(--primary-color)";
            dots.push(<DotIcon key={i} color={color} />);
        }
        return dots;
    };

    return (
        <div className={classNames(styles.dotsContainer)}>
            {_dots().map(dot => dot)}
        </div>
    );
};