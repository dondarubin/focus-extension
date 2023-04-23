import styles from "./EditTaskModal.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { Modal } from "~shared/ui/Modal/Modal";
import { useAppDispatch, useAppSelector } from "~store";
import { setAddTaskModalActive, setEditTaskModalActive } from "~app/reducers/modals-slice";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { CalendarIcon } from "~shared/resources/icons/CalendarIcon";
import { PriorityIcon } from "~shared/resources/icons/PriorityIcon";
import { PlusIconBtn } from "~shared/resources/icons/plus/PlusIconBtn";
import React from "react";
import { DoneIcon } from "~shared/resources/icons/DoneIcon";
import { TrashIcon } from "~shared/resources/icons/TrashIcon";

interface EditTaskModalProps {
    className?: string;
}

export const EditTaskModal = ({ className }: EditTaskModalProps) => {

    const editTaskState = useAppSelector(state => state.modal.editTaskModalActive);
    const dispatch = useAppDispatch();

    function OnClickCloseEditTaskModalHandler() {
        dispatch(setEditTaskModalActive(false));
    }

    function OnClickSubmitFormHandler(e: React.FormEvent) {
        e.preventDefault();
        // dispatch....
        OnClickCloseEditTaskModalHandler();
    }

    return (
        <Modal className={classNames(styles.EditTaskModal, {}, [className])}
               modalActive={editTaskState}
               setModalActive={OnClickCloseEditTaskModalHandler}
        >
            <div className={styles.taskTitle}>
                U/X Research
            </div>

            <form onSubmit={OnClickSubmitFormHandler}>
                <div className={styles.chooseDate}>
                    <span>28.05.23</span>
                    <Button theme={ThemeButton.CLEAR}>
                        <CalendarIcon color={"var(--secondary-color)"} />
                    </Button>
                </div>

                <div className={styles.aboutWrapper}>
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

                    <div className={styles.footerGroup}>
                        <Button className={styles.footerBtnTrash}
                                theme={ThemeButton.DEFAULT}
                        >
                            <TrashIcon />
                        </Button>
                        <Button className={styles.footerBtn}
                                Type={"submit"}
                                theme={ThemeButton.DEFAULT}
                        >
                            <DoneIcon />
                            <span>Done</span>
                        </Button>
                    </div>
                </div>
            </form>
        </Modal>
    );
};