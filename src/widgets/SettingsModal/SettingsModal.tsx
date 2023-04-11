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
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import React, {Dispatch, SetStateAction} from "react";
import { CustomSelect } from "~shared/ui/CustomSelect/CustomSelect";

interface SettingsModalProps {
    modalActive: boolean;
    setModalActive: Dispatch<SetStateAction<boolean>>;
    children?: ReactNode;
}

export const SettingsModal: FC<SettingsModalProps> = (props) => {
    const {
        modalActive,
        setModalActive
    } = props;

    function OnClickCloseSettingsModalHandler() {
        setModalActive((prev) => !prev)
    }

    return (
        <Modal
            className={classNames(styles.SettingsModal, {}, [])}
            modalActive={modalActive}
            setModalActive={setModalActive}
        >
            <div className={classNames(styles.title, {}, [])}>
                Settings
            </div>

            <div className={classNames(styles.whatIs, {}, [])}>
                <span>What is the pomodoro technique</span>
                <QuestionIcon />
            </div>

            <div className={classNames(styles.info, {}, [])}>

                <div className={classNames(styles.focus, {}, [])}>
                    <span>Focus</span>
                    <SelectFocusTime />
                </div>

                <div className={classNames(styles.focus, {}, [])}>
                    <span>Short break</span>
                    <SelectShortBreak />
                </div>

                <div className={classNames(styles.focus, {}, [])}>
                    <span>Long break</span>
                    <SelectLongBreak />
                </div>

                <div className={classNames(styles.focus, {}, [])}>
                    <span>Sessions</span>
                    <SelectSessions />
                </div>

                <div className={classNames(styles.focus, {}, [])}>
                    <span>Theme</span>
                    <ThemeSwitcher />
                </div>
            </div>

            <Button theme={ThemeButton.DEFAULT}
                    className={classNames(styles.button, {}, [])}
                    onClick={OnClickCloseSettingsModalHandler}>
                Save
            </Button>
        </Modal>
    );
};