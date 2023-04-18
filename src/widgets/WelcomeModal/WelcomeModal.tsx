import React, { Dispatch, FC, SetStateAction } from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./WelcomeModal.module.scss";
import { Modal } from "~shared/ui/Modal/Modal";
import { WelcomeIcon } from "~shared/resources/icons/people/WelcomeIcon";
import { Button, ThemeButton } from "~shared/ui/Button/Button";

interface WelcomeModalProps {
    className?: string;
    welcomeModalActive: boolean;
    setWelcomeModalActive: Dispatch<SetStateAction<boolean>>;
}

export const WelcomeModal: FC<WelcomeModalProps> = (props) => {

    const {
        className,
        welcomeModalActive,
        setWelcomeModalActive
    } = props;


    return (
        <Modal className={classNames(styles.WelcomeModal, {}, [className])}
               modalActive={welcomeModalActive}
               setModalActive={setWelcomeModalActive}
        >
            <div className={styles.welcomeWrapper}>
                <WelcomeIcon primaryColor={"var(--primary-color)"} secondaryColor={"var(--secondary-color)"} />

                <Button className={styles.button}
                        theme={ThemeButton.DEFAULT}
                >
                    Get started
                </Button>
            </div>
        </Modal>
    );
};