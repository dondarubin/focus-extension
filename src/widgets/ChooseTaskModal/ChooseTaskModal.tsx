import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./ChooseTaskModal.module.scss";
import { Modal } from "~shared/ui/Modal/Modal";
import type { FC } from "react";
import React, { Dispatch, SetStateAction } from "react";
import { useAppDispatch } from "~store";
import { setCurrentTaskName } from "~app/reducers/tomato-slice";

interface ChooseTaskModalProps {
    chooseTaskModalActive?: boolean;
    setChooseTaskModalActive?: Dispatch<SetStateAction<boolean>>;
}

export const ChooseTaskModal: FC<ChooseTaskModalProps> = (props) => {
    const {
        chooseTaskModalActive,
        setChooseTaskModalActive
    } = props;

    const dispatch = useAppDispatch();

    function closeModal() {
        setChooseTaskModalActive((prev) => !prev);
    }

    function OnClickCloseChooseTaskModalHandler() {
        closeModal();
    }

    function chooseTaskHandler(taskName: string) {
        dispatch(setCurrentTaskName(taskName));
        closeModal();
    }

    const cardTask = (title: string, time: string) => {
        return (
            <div className={classNames(styles.cardTask, {}, [])}
                 onClick={() => chooseTaskHandler(title)}>
                <div className={classNames(styles.taskName, {}, [])}>
                    {title}
                </div>

                <div className={classNames(styles.taskTime, {}, [])}>
                    {time}
                </div>
            </div>
        );
    };

    return (
        <Modal
            className={classNames(styles.ChooseTaskModal, {}, [])}
            modalActive={chooseTaskModalActive}
            setModalActive={setChooseTaskModalActive}
        >
            <div className={classNames(styles.nav, {}, [])}>
                <div className={classNames(styles.title, {}, [])}>
                    Choose Task
                </div>

                <div className={classNames(styles.whatIs, {}, [])}>
                    <span>Select one task to start the timer</span>
                </div>
            </div>

            <div className={classNames(styles.tasksWrapper, {}, [])}>
                {cardTask("Make a prototype for pomodoro timer", "Today")}
                {cardTask("U/x Research", "Today")}
                {cardTask("Make a prototype for pomodoro timer", "Today")}
                {cardTask("Make a prototype for pomodoro timer", "Today")}
                {cardTask("Make a prototype for pomodoro timer", "Today")}
            </div>
        </Modal>
    );
};