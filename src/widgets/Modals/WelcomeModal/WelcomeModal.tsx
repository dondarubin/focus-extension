import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./WelcomeModal.module.scss";
import { Modal } from "~shared/ui/Modal/Modal";
import { WelcomeIcon } from "~shared/resources/icons/people/WelcomeIcon";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { SkipIcon } from "~shared/resources/icons/arrow/SkipIcon";
import { Slider } from "~widgets/Slider/Slider";
import { useAppDispatch, useAppSelector } from "~store";
import { ModalsNames, setModalActive } from "~app/reducers/modals-slice";

interface WelcomeModalProps {
    className?: string;
}

export const WelcomeModal: FC<WelcomeModalProps> = (props) => {
    const [getStarted, setGetStarted] = useState(false);

    const {
        className
    } = props;

    const welcomeModalState = useAppSelector(state => state.modal[ModalsNames.WELCOME]);
    const dispatch = useAppDispatch();

    function OnClickGetStartedHandler() {
        setGetStarted((prev) => !prev);
    }

    function OnClickCloseWelcomeModalHandler() {
        dispatch(setModalActive({
            ModalName: ModalsNames.WELCOME,
            active: false
        }));
    }
    
    const GetStarted = () => {
        return (
            <div className={styles.welcomeWrapper}>
                <WelcomeIcon primaryColor={"var(--primary-color)"} secondaryColor={"var(--secondary-color)"} />

                <Button className={styles.button}
                        theme={ThemeButton.DEFAULT}
                        OnClick={OnClickGetStartedHandler}
                >
                    Get started
                </Button>
            </div>
        );
    };

    const WelcomeModal = () => {
        return (
            <>
                <nav className={styles.nav}>
                    <div className={styles.skip}
                         onClick={OnClickCloseWelcomeModalHandler}
                    >
                        <span>Skip</span>
                        <SkipIcon />
                    </div>
                </nav>

                <div className={styles.content}>
                    <Slider />
                </div>
            </>
        );
    };


    return (
        <Modal className={classNames(styles.WelcomeModal, {}, [className])}
               SetCloseButton={false}
               modalActive={welcomeModalState}
               setModalActive={OnClickCloseWelcomeModalHandler}
        >
            {!getStarted ? GetStarted() : WelcomeModal()}
        </Modal>
    );
};