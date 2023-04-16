import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./ChooseTaskModal.module.scss";
import { Modal } from "~shared/ui/Modal/Modal";
import type { FC } from "react";
import React, { Dispatch, SetStateAction } from "react";
import { useAppDispatch } from "~store";
import { setCurrentTaskName } from "~app/reducers/tomato-slice";
import { ChooseTaskModalMansIcon } from "~shared/resources/icons/people/ChooseTaskModalMansIcon";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { Link } from "react-router-dom";
import { RoutePath } from "~shared/config/routeConfig/routeConfig";

interface ChooseTaskModalProps {
    chooseTaskModalActive?: boolean;
    setChooseTaskModalActive?: Dispatch<SetStateAction<boolean>>;
}

const mock_tasks = [
    /*{
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
    }*/
];


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

    const _cardTask = (props: { title: string, time: string }) => {
        return (
            <div className={classNames(styles.cardTask, {}, [])}
                 onClick={() => chooseTaskHandler(props.title)}>
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
                <div className={classNames(styles.nav, {}, [])}>
                    <div className={classNames(styles.title, {}, [])}>
                        Choose Task
                    </div>

                    <div className={classNames(styles.whatIs, {}, [])}>
                        <span>Select one task to start the timer</span>
                    </div>
                </div>

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

    const _renderIfTasksEmpty = () => {
        return (
            <div className={styles.emptyPageContainer}>
                <ChooseTaskModalMansIcon />
                <div className={styles.emptyPageMsgContainer}>
                    <h2>Your task list is empty</h2>
                    <span>Create one and get to work</span>
                </div>
                <Link to={RoutePath.tasks}>
                    <Button onClick={closeModal} className={styles.goToTasksButton} theme={ThemeButton.DEFAULT}>
                        Go to Tasks
                    </Button>
                </Link>
            </div>
        );
    };

    return (
        <Modal
            className={classNames(styles.ChooseTaskModal, {}, [])}
            modalActive={chooseTaskModalActive}
            setModalActive={setChooseTaskModalActive}
        >
            {
                mock_tasks.length !== 0
                    ? <_tasksPage />
                    : <_renderIfTasksEmpty />
            }

        </Modal>
    );
};