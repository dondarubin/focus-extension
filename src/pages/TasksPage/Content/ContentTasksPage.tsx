import styles from "./ContentTasksPage.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { DownArrowIcon } from "~shared/resources/icons/arrow/DownArrowIcon";
import { TaskCardTasksPage } from "~widgets/TaskCards/TaskCardTasksPage/TaskCardTasksPage";
import { useAppDispatch } from "~store";
import { setEditTaskModalActive } from "~app/reducers/modals-slice";


interface ContentTasksPageProps {
    className?: string;
}

export const ContentTasksPage = ({ className }: ContentTasksPageProps) => {
    return (
        <div className={classNames(styles.ContentTasksPage, {}, [className])}>
            {/*<div className={styles.emptyTaskList}>*/}
            {/*    <EmptyTasksListIcon primaryColor={"var(--primary-color)"} secondaryColor={"var(--secondary-color)"} />*/}
            {/*</div>*/}

            <div className={styles.tasksWrapper}>
                <TaskCardTasksPage priority={true} taskName={"task name"} sessionsCount={3} date={new Date()} />
                <TaskCardTasksPage priority={true} taskName={"task name"} sessionsCount={1} date={new Date()} />
                <TaskCardTasksPage priority={false} taskName={"task name"} sessionsCount={3} date={new Date()} />
                <TaskCardTasksPage priority={false} taskName={"task name"} sessionsCount={6} date={new Date()} />
                <TaskCardTasksPage priority={false} taskName={"task name"} sessionsCount={2} date={new Date()} />
            </div>
        </div>
    );
};