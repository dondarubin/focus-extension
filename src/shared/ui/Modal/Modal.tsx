import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./Modal.module.scss";
import type { FC, ReactNode } from "react";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { CloseIcon } from "~shared/resources/icons/close/CloseIcon";

interface ModalProps {
    modalActive: boolean;
    setModalActive: (arg: boolean) => void;
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

    return (
        <div className={classNames(styles.Modal, {}, [
            className,
            modalActive ? styles.active : ""
        ])}>
            <div className={classNames(styles.modalContent, {}, [])}>
                <Button
                    className={classNames(styles.modalButton, {}, [])}
                    onClick={() => setModalActive(false)}
                    theme={ThemeButton.CLEAR}
                >
                    <CloseIcon />
                </Button>
                {children}
            </div>
        </div>
    );
};