import React, { FC } from "react";
import styles from "./NavStatsPage.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { RewardIconIndicator } from "~widgets/RewardIconIndicator/RewardIconIndicator";
import { useAppSelector } from "~store";
import is from "@sindresorhus/is";

type NavStatsPageProps = {
    className?: string
}

export const NavStatsPage: FC<NavStatsPageProps> = (props) => {
    const isScrolled = useAppSelector(state => state.statsPageScroll);
    
    const {
        className
    } = props;

    return (
        <div className={classNames(styles.NavStatsPage, {}, [className, isScrolled ? styles.navShadow : ""])}>
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
                <RewardIconIndicator value={9} />
            </Button>

        </div>
    );
};