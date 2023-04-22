import styles from "./GuideModal.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { Modal } from "~shared/ui/Modal/Modal";
import React, { Dispatch, FC, SetStateAction } from "react";
import { GuideStepsIcon } from "~shared/resources/icons/GuideSteps/GuideStepsIcon";
import { useAppDispatch, useAppSelector } from "~store";
import { setGuideModalActive, setSettingsModalActive } from "~app/reducers/modals-slice";

interface GuideModalProps {

    className?: string;
}

export const GuideModal: FC<GuideModalProps> = (props) => {
    const {
        className,
    } = props;

    const guideModalState = useAppSelector(state => state.modal.guideModalActive);
    const dispatch = useAppDispatch();

    function OnClickCloseGuideModalHandler(){
        dispatch(setGuideModalActive(false))
    }

    return (
        <Modal className={classNames(styles.GuideModal, {}, [className])}
               modalActive={guideModalState}
               setModalActive={OnClickCloseGuideModalHandler}
        >
            <div className={styles.title}>
                What is the Pomodoro Technique
            </div>

            <div className={styles.wrapper}>
                <div className={styles.icon}>
                    <GuideStepsIcon />
                </div>

                <div className={styles.steps}>
                    <span>Choose a single task to focus on</span>
                    <span>Set a timer for 25 minutes and<br /> work only on your selected<br /> task</span>
                    <span>After 25 minutes take<br /> a five-minute break</span>
                    <span>Repeat steps 1-2 untill you<br /> get things done</span>
                    <span>Take a longer break of<br /> about 15 to 30 minutes</span>
                    <span>Use this technique daily<br /> to be more productive</span>
                </div>
            </div>
        </Modal>
    );
};