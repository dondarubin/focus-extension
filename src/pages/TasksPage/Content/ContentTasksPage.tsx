import styles from "./ContentTasksPage.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { EmptyTasksListIcon } from "~shared/resources/icons/people/EmptyTasksListIcon";
import { DownArrowIcon } from "~shared/resources/icons/arrow/DownArrowIcon";
import { useAppDispatch } from "~store";
import { setEditTaskModalActive } from "~app/reducers/modals-slice";

interface ContentTasksPageProps {
    className?: string;
}

export const ContentTasksPage = ({ className }: ContentTasksPageProps) => {

    const dispatch = useAppDispatch();

    function OnClickOpenEditTaskModalHandler() {
        dispatch(setEditTaskModalActive(true));
    }

    const taskCard = (title: string, sessions: string) => {
        return (
            <div className={styles.taskCard}
                 onClick={OnClickOpenEditTaskModalHandler}
            >
                <div className={styles.priority}></div>

                <div className={styles.taskDescriptionWrapper}>
                    <div className={styles.taskTitle}>
                        {title}
                    </div>
                    <div className={styles.taskSessions}>
                        {sessions}
                    </div>
                </div>

                <div className={styles.arrowWrapper}>
                    <DownArrowIcon />
                </div>
            </div>
        );
    };

    return (
        <div className={classNames(styles.ContentTasksPage, {}, [className])}>
            {/*<div className={styles.emptyTaskList}>*/}
            {/*    <EmptyTasksListIcon primaryColor={"var(--primary-color)"} secondaryColor={"var(--secondary-color)"} />*/}
            {/*</div>*/}

            <div className={styles.tasksWrapper}>
                {taskCard("Make a prototype for pomodoro timer", "5x Sessions")}
                {taskCard("U/X Research", "0 Sessions")}
                {taskCard("U/X Research", "0 Sessions")}
                {taskCard("Make a prototype for pomodoro timer", "5x Sessions")}
                {taskCard("U/X Research", "0 Sessions")}
                {taskCard("U/X Research", "0 Sessions")}
            </div>
        </div>
    );
};