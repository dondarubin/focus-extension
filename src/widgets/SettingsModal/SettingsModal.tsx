import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./SettingsModal.module.scss";
import { Modal } from "~shared/ui/Modal/Modal";
import type { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { QuestionIcon } from "~shared/resources/icons/question/QuestionIcon";
import { SelectFocusTime } from "~widgets/SelectFocusTime/SelectFocusTime";
import { ThemeSwitcher } from "~widgets/ThemeSwitcher/ThemeSwitcher";
import { SelectShortBreak } from "~widgets/SelectShortBreak/SelectShortBreak";
import { SelectLongBreak } from "~widgets/SelectLongBreak/SelectLongBreak";
import { SelectSessions } from "~widgets/SelectSessions/SelectSessions";
import { Button, ThemeButton } from "~shared/ui/Button/Button";

interface SettingsModalProps {
    settingsModalActive: boolean;
    setSettingsModalActive: Dispatch<SetStateAction<boolean>>;
    setGuideModalActive: Dispatch<SetStateAction<boolean>>;
    children?: ReactNode;
}

export const SettingsModal: FC<SettingsModalProps> = (props) => {
    const {
        settingsModalActive,
        setSettingsModalActive,
        setGuideModalActive
    } = props;

    function OnClickCloseSettingsModalHandler() {
        setSettingsModalActive((prev) => !prev);
    }

    function OnClickOpenGuideModalHandler() {
        setGuideModalActive((prev) => !prev);
    }


    return (
        <Modal
            className={classNames(styles.SettingsModal, {}, [])}
            modalActive={settingsModalActive}
            setModalActive={setSettingsModalActive}
        >
            <div className={classNames(styles.title, {}, [])}>
                Settings
            </div>

            <div onClick={OnClickOpenGuideModalHandler}
                 className={classNames(styles.whatIs, {}, [])}
            >
                <span>What is the pomodoro technique</span>
                <QuestionIcon />
            </div>

            <div className={classNames(styles.info, {}, [])}>
                <div className={classNames(styles.focus, {}, [])}>
                    <span>Theme</span>
                    <ThemeSwitcher />
                </div>

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
            </div>

            <Button theme={ThemeButton.DEFAULT}
                    className={classNames(styles.button, {}, [])}
                    onClick={OnClickCloseSettingsModalHandler}>
                Save
            </Button>
        </Modal>
    );
};