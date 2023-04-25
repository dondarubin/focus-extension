import styles from "./ContentStatsPage.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { FlowTrackerChart } from "~widgets/FlowTrakerChart/FlowTrackerChart";
import React from "react";
import { useAppDispatch } from "~store";
import { setIsScrolled } from "~app/reducers/statsPageScroll-slice";
import { StarIcon } from "~shared/resources/icons/StarIcon";


interface ContentStatsPageProps {
    className?: string;
}

const userTask = () => {
    return (
        <div className={styles.userTask}>
            <div className={styles.nav}>
                <div>
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
    const dispatch = useAppDispatch();
    const _setIsScrolled = (value: boolean) => {
        dispatch(setIsScrolled(value));
    };

    const handleScroll = (event) => {
        const scrollTop = event.target.scrollTop;
        const scrollHeight = event.target.scrollHeight;
        const clientHeight = event.target.clientHeight;

        if (scrollTop > 0 && scrollTop + clientHeight < scrollHeight) {
            _setIsScrolled(true);
        } else {
            _setIsScrolled(false);
        }
    };

    return (
        <div
            className={classNames(styles.ContentStatsPage, {}, [className])}>
            <div onScroll={handleScroll} className={styles.contentWrapper}>
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