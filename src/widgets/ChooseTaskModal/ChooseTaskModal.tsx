import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./ChooseTaskModal.module.scss";
import { Modal } from "~shared/ui/Modal/Modal";
import type { FC } from "react";
import React, { Dispatch, SetStateAction } from "react";

interface ChooseTaskModalProps {
    className?: string;
    chooseTaskModalActive?: boolean;
    setChooseTaskModalActive?: Dispatch<SetStateAction<boolean>>;
}

export const ChooseTaskModal: FC<ChooseTaskModalProps> = (props) => {
    const {
        className,
        chooseTaskModalActive,
        setChooseTaskModalActive
    } = props;

    function OnClickCloseChooseTaskModalHandler() {
        setChooseTaskModalActive((prev) => !prev);
    }

    const cardTask = (title: string, time: string) => {
        return (
            <div className={styles.cardTask}
                 onClick={OnClickCloseChooseTaskModalHandler}>
                <div className={styles.taskName}>
                    {title}
                </div>

                <div className={styles.taskTime}>
                    {time}
                </div>
            </div>
        );
    };

    return (
        <Modal
            className={classNames(styles.ChooseTaskModal, {}, [className])}
            modalActive={chooseTaskModalActive}
            setModalActive={setChooseTaskModalActive}
        >
            <div className={styles.nav}>
                <div className={styles.title}>
                    Choose Task
                </div>

                <div className={styles.whatIs}>
                    <span>Select one task to start the timer</span>
                </div>
            </div>

            <div className={styles.tasksWrapper}>
                {cardTask("Make a prototype for pomodoro timer", "Today")}
                {cardTask("Make a prototype for pomodoro timer", "Today")}
                {cardTask("Make a prototype for pomodoro timer", "Today")}
                {cardTask("Make a prototype for pomodoro timer", "Today")}
                {cardTask("Make a prototype for pomodoro timer", "Today")}
                {cardTask("Make a prototype for pomodoro timer", "Today")}
                {cardTask("Make a prototype for pomodoro timer", "Today")}
                {cardTask("Make a prototype for pomodoro timer", "Today")}
                {cardTask("Make a prototype for pomodoro timer", "Today")}
                {cardTask("Make a prototype for pomodoro timer", "Today")}
                {cardTask("Make a prototype for pomodoro timer", "Today")}
                {cardTask("Make a prototype for pomodoro timer", "Today")}
                {cardTask("Make a prototype for pomodoro timer", "Today")}
            </div>
        </Modal>
    );
};