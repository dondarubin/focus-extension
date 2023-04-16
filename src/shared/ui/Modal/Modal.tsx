import {classNames} from "~shared/lib/classNames/classNames";
import styles from "./Modal.module.scss";
import type {FC, ReactNode} from "react";
import {Button, ThemeButton} from "~shared/ui/Button/Button";
import {CloseIcon} from "~shared/resources/icons/close/CloseIcon";
import React, {Dispatch, SetStateAction} from "react";


interface ModalProps {
    modalActive: boolean;
    setModalActive: Dispatch<SetStateAction<boolean>>;
    className?: string;
    children?: ReactNode;
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        modalActive,
        setModalActive,
        className,
        children
    } = props;

    function OnClickCloseModalHandler() {
        setModalActive((prev) => !prev)
    }

    return (
        <div className={classNames(styles.Modal, {}, [
            className,
            modalActive ? styles.active : ""
        ])}>
            <div className={styles.modalContent}>
                <Button className={styles.modalButton}
                        onClick={OnClickCloseModalHandler}
                        theme={ThemeButton.CLEAR}>
                    <CloseIcon />
                </Button>
                {children}
            </div>
        </div>
    );
};