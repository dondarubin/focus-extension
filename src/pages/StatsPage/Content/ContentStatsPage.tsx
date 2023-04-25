import styles from "./ContentStatsPage.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { FlowTrackerChart } from "~widgets/FlowTrakerChart/FlowTrackerChart";
import React from "react";
import { StarIcon } from "~shared/resources/icons/StarIcon";

interface ContentStatsPageProps {
    className?: string;
}

const reward = () => {
    return (
        <div className={styles.userTask}>
            <div className={styles.nav}>
                <span className={styles.countStars}>14</span>
                <StarIcon />
            </div>

            <div className={styles.bar}></div>
        </div>
    );
};

export const ContentStatsPage = ({ className }: ContentStatsPageProps) => {
    return (
        <div className={classNames(styles.ContentStatsPage, {}, [className])}>
            <div className={styles.contentWrapper}>
                <FlowTrackerChart />

                <div className={styles.userTasks}>
                    {reward()}
                    {reward()}
                    {reward()}
                    {reward()}
                    {reward()}
                    {reward()}
                    {reward()}
                </div>
            </div>
        </div>
    );
};