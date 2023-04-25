import React, { FC } from "react";
import styles from "./NavStatsPage.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { RewardsIcon } from "~shared/resources/icons/RewardsIcon";
import { Button, ThemeButton } from "~shared/ui/Button/Button";

type NavStatsPageProps = {
    className?: string
}

export const NavStatsPage: FC<NavStatsPageProps> = (props) => {
    const {
        className
    } = props;

    return (
        <div className={classNames(styles.NavStatsPage, {}, [className])}>
            <div className={styles.infoContainer}>
                <span className={styles.title}>
                    WorkFlow Tracker
                </span>
                <span className={styles.titleDescription}>
                    Achieve goals, track stats, get rewards
                </span>
            </div>
            <Button
                theme={ThemeButton.CLEAR}
                className={styles.rewardsButton}
            >
                <RewardsIcon color={"black"}></RewardsIcon>
            </Button>

        </div>
    );
};