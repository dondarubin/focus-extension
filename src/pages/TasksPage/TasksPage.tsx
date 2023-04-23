import React from "react";
import styles from "./Taskpage.module.scss";
import { NavTaskPage } from "~pages/TasksPage/Nav/NavTaskPage";
import { ContentTasksPage } from "~pages/TasksPage/Content/ContentTasksPage";
import { AddTaskModal } from "~widgets/AddTaskModal/AddTaskModal";
import { EditTaskModal } from "~widgets/EditTaskModal/EditTaskModal";
import { AllTasksModal } from "~widgets/AllTasksModal/AllTasksModal";

const TasksPage = () => {
    return (
        <div className={styles.TaskPage}>
            <AddTaskModal />
            <EditTaskModal />
            <AllTasksModal />

            <NavTaskPage />
            <ContentTasksPage />
        </div>
    );
};

export default TasksPage;