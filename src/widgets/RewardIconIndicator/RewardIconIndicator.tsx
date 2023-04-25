import React, { FC } from "react";
import styles from "./RewardIconIndicator.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { RewardsIcon } from "~shared/resources/icons/RewardsIcon";

type RewardIconIndicatorProps = {
    className?: string
    value: number
}

export const RewardIconIndicator: FC<RewardIconIndicatorProps> = (props) => {
    const {
        className,
        value
    } = props;

    function formatNumberValue(val: number): string {
        return val > 9 ? "9+" : val.toString();
    }

    return (
        <div className={classNames(styles.RewardIconIndicator, {}, [className])}>
            <div className={styles.circle}>
                <span className={styles.number}>
                    {formatNumberValue(value)}
                </span>
            </div>
            <RewardsIcon />
        </div>
    );
};