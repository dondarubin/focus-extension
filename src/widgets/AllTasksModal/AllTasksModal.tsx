import styles from "./AllTasksModal.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { Modal } from "~shared/ui/Modal/Modal";
import { useAppDispatch, useAppSelector } from "~store";
import { setAllTasksModalActive } from "~app/reducers/modals-slice";
import React from "react";

interface AllTasksModalProps {
    className?: string;
}

export const AllTasksModal = ({ className }: AllTasksModalProps) => {

    const allTaskState = useAppSelector(state => state.modal.allTasksModalActive);
    const dispatch = useAppDispatch();

    function OnClickCloseAllTaskModalHandler() {
        dispatch(setAllTasksModalActive(false));
    }

    const mock_tasks = [
        {
            name: "Make a prototype for pomodoro timer",
            time: "Today"
        },
        {
            name: "Make a prototype for pomodoro timer",
            time: "Today"
        },
        {
            name: "Make a prototype for pomodoro timer",
            time: "Today"
        },
        {
            name: "Make a prototype for pomodoro timer",
            time: "Today"
        },
        {
            name: "Make a prototype for pomodoro timer",
            time: "Today"
        },
        {
            name: "Make a prototype for pomodoro timer",
            time: "Today"
        },
        {
            name: "Make a prototype for pomodoro timer",
            time: "Today"
        },
        {
            name: "Make a prototype for pomodoro timer",
            time: "Today"
        },
        {
            name: "Make a prototype for pomodoro timer",
            time: "Today"
        },
        {
            name: "Make a prototype for pomodoro timer",
            time: "Today"
        },
        {
            name: "Make a prototype for pomodoro timer",
            time: "Today"
        },
        {
            name: "Make a prototype for pomodoro timer",
            time: "Today"
        },
        {
            name: "Make a prototype for pomodoro timer",
            time: "Today"
        },
        {
            name: "Make a prototype for pomodoro timer",
            time: "Today"
        },
        {
            name: "Make a prototype for pomodoro timer",
            time: "Today"
        },
        {
            name: "Make a prototype for pomodoro timer",
            time: "Today"
        },
        {
            name: "Make a prototype for pomodoro timer",
            time: "Today"
        },
        {
            name: "Make a prototype for pomodoro timer",
            time: "Today"
        },
        {
            name: "Make a prototype for pomodoro timer",
            time: "Today"
        },
        {
            name: "Make a prototype for pomodoro timer",
            time: "Today"
        }
    ];

    const _cardTask = (props: { title: string, time: string }) => {
        return (
            <div className={classNames(styles.cardTask, {}, [])}>
                <div className={classNames(styles.taskName, {}, [])}>
                    {props.title}
                </div>

                <div className={classNames(styles.taskTime, {}, [])}>
                    {props.time}
                </div>
            </div>
        );
    };

    const _tasksPage = () => {
        return (
            <>
                <div className={classNames(styles.tasksWrapper, {}, [])}>
                    {mock_tasks.map((task, i) => {
                        return (
                            <_cardTask key={i} title={task.name} time={task.time} />
                        );
                    })}
                </div>
            </>
        );
    };

    return (
        <Modal className={classNames(styles.AllTasksModal, {}, [className])}
               modalActive={allTaskState}
               setModalActive={OnClickCloseAllTaskModalHandler}
        >
            <div className={styles.navModal}>
                <div className={styles.title}>
                    <span>Completed Tasks</span>
                </div>

                <div className={styles.desc}>
                    <span>You have already completed 21 tasks,<br /> keep going!</span>
                </div>
            </div>

            <_tasksPage />

        </Modal>
    );
};