import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./WelcomeModal.module.scss";
import { Modal } from "~shared/ui/Modal/Modal";
import { WelcomeIcon } from "~shared/resources/icons/people/WelcomeIcon";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { SkipIcon } from "~shared/resources/icons/arrow/SkipIcon";
import { Slider } from "~widgets/Slider/Slider";

interface WelcomeModalProps {
    className?: string;
    welcomeModalActive: boolean;
    setWelcomeModalActive: Dispatch<SetStateAction<boolean>>;
}

export const WelcomeModal: FC<WelcomeModalProps> = (props) => {
    const [getStarted, setGetStarted] = useState(false);

    const {
        className,
        welcomeModalActive,
        setWelcomeModalActive
    } = props;

    function OnClickGetStartedHandler() {
        setGetStarted((prev) => !prev);
    }

    function OnClickCloseWelcomeModalHandler() {
        setWelcomeModalActive((prev) => !prev);
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
                    <Slider setWelcomeModalActive={OnClickCloseWelcomeModalHandler} />
                </div>
            </>
        );
    };


    return (
        <Modal className={classNames(styles.WelcomeModal, {}, [className])}
               SetCloseButton={false}
               modalActive={welcomeModalActive}
               setModalActive={setWelcomeModalActive}
        >
            {!getStarted ? GetStarted() : WelcomeModal()}
        </Modal>
    );
};