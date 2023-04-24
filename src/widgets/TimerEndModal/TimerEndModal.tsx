import styles from "./TimerEndModal.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { Modal } from "~shared/ui/Modal/Modal";
import { useAppDispatch, useAppSelector } from "~store";
import { ModalsNames, setModalActive } from "~app/reducers/modals-slice";
import { Button, ThemeButton } from "~shared/ui/Button/Button";

interface TimerEndModalProps {
    className?: string;
}

export const TimerEndModal = ({ className }: TimerEndModalProps) => {

    const timerEndState = useAppSelector(state => state.modal[ModalsNames.TIMER_END]);
    const currentTaskNameState = useAppSelector(state => state.tomato.currentTaskName);
    const dispatch = useAppDispatch();


    function OnClickCloseTimerEndModalHandler() {
        dispatch(setModalActive({
            ModalName: ModalsNames.TIMER_END,
            active: false
        }));
    }

    return (
        <Modal className={classNames(styles.TimerEndModal, {}, [className])}
               modalActive={timerEndState}
               SetCloseButton={false}
        >
            <div className={styles.content}>
                <span className={styles.title}>
                    Timer is ended
                </span>

                <span className={styles.ask}>
                    Did you finish <b>{currentTaskNameState}</b>?
                </span>
            </div>

            <div className={styles.footer}>
                <Button className={styles.btn}
                        theme={ThemeButton.DEFAULT}
                        OnClick={OnClickCloseTimerEndModalHandler}
                >
                    Yes
                </Button>

                <Button className={styles.btn}
                        theme={ThemeButton.INVERT_DEFAULT}
                        OnClick={OnClickCloseTimerEndModalHandler}
                >
                    Not Yet
                </Button>
            </div>
        </Modal>
    );
};