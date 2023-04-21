import React, { FC } from "react";
import styles from "./TaskCardTasksPage.module.scss";
import { DownArrowIcon } from "~shared/resources/icons/arrow/DownArrowIcon";
import { classNames } from "~shared/lib/classNames/classNames";

type TaskCardTasksPageProps = {
    className?: string
    priority: boolean
    taskName: string
    sessionsCount: number
    date: Date
}

export const TaskCardTasksPage: FC<TaskCardTasksPageProps> = (props) => {
    const {
        className,
        priority,
        taskName,
        sessionsCount,
        date
    } = props;

    function formatDate(date: Date): string {
        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit"
        }).replace(/\//g, ".");
    }

    return (
        <div className={classNames(styles.taskCard, {}, [className])}>
            <div className={
                classNames(
                    styles.priority,
                    {},
                    [priority ? styles.heightPriority : styles.defaultPriority]
                )
            }
            >
            </div>

            <div className={styles.ContentWrapper}>
                <div className={styles.DescriptionWrapper}>
                    <div className={styles.title}>
                        {taskName}
                    </div>
                    <div className={styles.sessions}>
                        {`${sessionsCount}x Sessions`}
                    </div>
                </div>
                <div className={styles.date}>
                    {formatDate(date)}
                </div>
            </div>
        </div>
    );
};