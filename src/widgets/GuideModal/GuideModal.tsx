import styles from "./GuideModal.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { Modal } from "~shared/ui/Modal/Modal";
import React, { Dispatch, FC, SetStateAction } from "react";
import { GuideStepsIcon } from "~shared/resources/icons/GuideSteps/GuideStepsIcon";

interface GuideModalProps {
    guideModalActive: boolean;
    setGuideModalActive: Dispatch<SetStateAction<boolean>>;
    className?: string;
}

export const GuideModal: FC<GuideModalProps> = (props) => {
    const {
        guideModalActive,
        setGuideModalActive
    } = props;

    return (
        <Modal className={classNames(styles.GuideModal, {}, [])}
               modalActive={guideModalActive}
               setModalActive={setGuideModalActive}
        >
            <div className={classNames(styles.title)}>
                What is the Pomodoro Technique
            </div>

            <div className={classNames(styles.wrapper)}>
                <div className={classNames(styles.icon)}>
                    <GuideStepsIcon />
                </div>

                <div className={classNames(styles.steps)}>
                    <span>Choose a single task to focus on</span>
                    <span>Set a timer for 25 minutes and work only on your selected task</span>
                    <span>After 25 minutes take a five-minute break</span>
                    <span>Repeat steps 1-2 untill you get things done</span>
                    <span>Take a longer break of about 15 to 30 minutes</span>
                    <span>Use this technique daily to be more productive</span>
                </div>
            </div>
        </Modal>
    );
};