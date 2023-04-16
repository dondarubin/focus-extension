import React from "react";
import styles from "./Taskpage.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";

const TasksPage = () => {
    return (
        <div className={classNames(styles.TaskPage, {}, [])}>
            Tasks Page
        </div>
    );
};

export default TasksPage;