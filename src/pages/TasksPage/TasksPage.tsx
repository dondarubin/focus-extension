import React from "react";
import styles from "./Taskpage.module.scss";
import { NavTaskPage } from "~pages/TasksPage/Nav/NavTaskPage";
import { ContentTasksPage } from "~pages/TasksPage/Content/ContentTasksPage";

const TasksPage = () => {
    return (
        <div className={styles.TaskPage}>
            <NavTaskPage />
            <ContentTasksPage />
        </div>
    );
};

export default TasksPage;