import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./SettingsModal.module.scss";
import { Modal } from "~shared/ui/Modal/Modal";
import type { FC, ReactNode } from "react";
import { QuestionIcon } from "~shared/resources/icons/question/QuestionIcon";
import { SelectFocusTime } from "~widgets/SelectFocusTime/SelectFocusTime";
import { ThemeSwitcher } from "~widgets/ThemeSwitcher/ThemeSwitcher";
import { SelectShortBreak } from "~widgets/SelectShortBreak/SelectShortBreak";
import { SelectLongBreak } from "~widgets/SelectLongBreak/SelectLongBreak";
import { SelectSessions } from "~widgets/SelectSessions/SelectSessions";
import { useAppDispatch, useAppSelector } from "~store";
import { ModalsNames, setModalActive } from "~app/reducers/modals-slice";
import React from "react";

interface SettingsModalProps {
    className?: string;
    children?: ReactNode;
}


export const SettingsModal: FC<SettingsModalProps> = (props) => {
    const {
        className
    } = props;

    const settingsModalState = useAppSelector(state => state.modal[ModalsNames.SETTINGS]);
    const dispatch = useAppDispatch();

    function OnClickCloseSettingsModalHandler() {
        dispatch(setModalActive({
            ModalName: ModalsNames.SETTINGS,
            active: false
        }));
    }

    function OnClickOpenGuideModalHandler() {
        dispatch(setModalActive({
            ModalName: ModalsNames.GUIDE,
            active: true
        }))
    }


    return (
        <Modal
            className={classNames(styles.SettingsModal, {}, [className])}
            modalActive={settingsModalState}
            setModalActive={OnClickCloseSettingsModalHandler}
        >
            <div className={styles.title}>
                Settings
            </div>

            <div className={styles.whatIs}
                 onClick={OnClickOpenGuideModalHandler}
            >
                <span>What is the pomodoro technique</span>
                <QuestionIcon />
            </div>

            <div className={styles.info}>
                <div className={styles.focus}>
                    <span>Theme</span>
                    <ThemeSwitcher />
                </div>

                <div className={styles.focus}>
                    <span>Focus</span>
                    <SelectFocusTime />
                </div>

                <div className={styles.focus}>
                    <span>Sessions</span>
                    <SelectSessions />
                </div>

                <div className={styles.focus}>

                    <span>Short break</span>
                    <SelectShortBreak />
                </div>

                <div className={styles.focus}>
                    <span>Long break</span>
                    <SelectLongBreak />
                </div>
            </div>
        </Modal>
    );
};