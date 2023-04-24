import styles from "./AddTaskModal.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { Modal } from "~shared/ui/Modal/Modal";
import { useAppDispatch, useAppSelector } from "~store";
import { ModalsNames, setModalActive } from "~app/reducers/modals-slice";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { PriorityIcon } from "~shared/resources/icons/PriorityIcon";
import { PlusIconBtn } from "~shared/resources/icons/plus/PlusIconBtn";
import React from "react";
import { DatePickerCalendar } from "~widgets/DatePickerCalendar/DatePickerCalendar";

interface AddTaskModalProps {
    className?: string;
}

export const AddTaskModal = ({ className }: AddTaskModalProps) => {
    const addTaskState = useAppSelector(state => state.modal[ModalsNames.ADD_TASK]);
    const dispatch = useAppDispatch();

    function OnClickCloseAddTaskModalHandler() {
        dispatch(setModalActive({
            ModalName: ModalsNames.ADD_TASK,
            active: false
        }));
    }

    function OnClickSubmitFormHandler(e: React.FormEvent) {
        e.preventDefault();
        // dispatch....
        OnClickCloseAddTaskModalHandler();
    }

    return (
        <Modal className={classNames(styles.AddTaskModal, {}, [className])}
               modalActive={addTaskState}
               setModalActive={OnClickCloseAddTaskModalHandler}
        >
            <div className={styles.title}>
                New Task
            </div>

            <form onSubmit={OnClickSubmitFormHandler}>
                <DatePickerCalendar />

                <div className={styles.aboutWrapper}>
                    <div className={styles.taskTitle}>
                        Title
                    </div>

                    <div className={styles.taskNote}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>

                <div className={styles.footer}>
                    <Button className={styles.footerBtn}
                            theme={ThemeButton.DEFAULT}
                    >
                        <PriorityIcon />
                        <span>Priority</span>
                    </Button>

                    <Button className={styles.footerBtn}
                            Type={"submit"}
                            theme={ThemeButton.DEFAULT}
                    >
                        <PlusIconBtn />
                        <span>Add</span>
                    </Button>
                </div>
            </form>
        </Modal>
    );
};