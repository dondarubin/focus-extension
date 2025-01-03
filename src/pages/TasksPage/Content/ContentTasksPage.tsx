import styles from "./ContentTasksPage.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { TaskCardTasksPage } from "~widgets/TaskCards/TaskCardTasksPage/TaskCardTasksPage";
import { EmptyTasksListIcon } from "~shared/resources/icons/people/EmptyTasksListIcon";


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