import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./ChooseTaskModal.module.scss";
import { Modal } from "~shared/ui/Modal/Modal";
import type { FC } from "react";
import React from "react";
import { useAppDispatch, useAppSelector } from "~store";
import { setCurrentTaskName } from "~app/reducers/tomato-slice";
import { ChooseTaskModalMansIcon } from "~shared/resources/icons/people/ChooseTaskModalMansIcon";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { Link } from "react-router-dom";
import { RoutePath } from "~shared/config/routeConfig/routeConfig";
import { AppRotes, setCurrentPage } from "~app/reducers/router-slice";
import { ModalsNames, setModalActive } from "~app/reducers/modals-slice";

interface ChooseTaskModalProps {
    className?: string;
}

const mock_tasks = [
    {
        name: "Make UI",
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
];


export const ChooseTaskModal: FC<ChooseTaskModalProps> = (props) => {
    const {
        className
    } = props;

    const chooseTaskModalState = useAppSelector(state => state.modal[ModalsNames.CHOOSE_TASK]);
    const dispatch = useAppDispatch();

    function OnClickCloseChooseTaskModalHandler() {
        dispatch(setModalActive({
            ModalName: ModalsNames.CHOOSE_TASK,
            active: false
        }));
    }

    function goToTasksClickHandler() {
        OnClickCloseChooseTaskModalHandler();
        dispatch(setCurrentPage(AppRotes.TASKS));
    }

    function chooseTaskHandler(taskName: string) {
        dispatch(setCurrentTaskName(taskName));
        OnClickCloseChooseTaskModalHandler();
    }

    const _cardTask = (props: { title: string, time: string }) => {
        return (

            <div className={classNames(styles.cardTask, {}, [])}
                 onClick={() => chooseTaskHandler(props.title)}
            >
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
                    <Button onClick={goToTasksClickHandler} className={styles.goToTasksButton}
                            theme={ThemeButton.DEFAULT}>
                        Go to Tasks
                    </Button>
                </Link>
            </div>
        );
    };

    return (
        <Modal
            className={classNames(styles.ChooseTaskModal, {}, [className])}
            modalActive={chooseTaskModalState}
            setModalActive={OnClickCloseChooseTaskModalHandler}
        >
            {
                mock_tasks.length !== 0
                    ? <_tasksPage />
                    : <_renderIfTasksEmpty />
            }
        </Modal>
    );
};