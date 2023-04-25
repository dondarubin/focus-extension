import styles from "./ContentStatsPage.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { FlowTrackerChart } from "~widgets/FlowTrakerChart/FlowTrackerChart";
import React from "react";
import { StarIcon } from "~shared/resources/icons/StarIcon";

interface ContentStatsPageProps {
    className?: string;
}

const userTask = () => {
    return (
        <div className={styles.userTask}>
            <div className={styles.nav}>
                <div className={styles.wrapper}>
                    <span className={styles.countStars}>14</span>
                    <StarIcon />
                    <span className={styles.userTaskName}>Completed Tasks</span>
                </div>

                <div className={styles.userTaskProgress}>
                    <span>(0/10)</span>
                </div>
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
                    {userTask()}
                    {userTask()}
                    {userTask()}
                    {userTask()}
                    {userTask()}
                    {userTask()}
                    {userTask()}
                </div>
            </div>
        </div>
    );
};