import {classNames} from "~shared/lib/classNames/classNames";
import styles from "./Modal.module.scss";
import type {FC, ReactNode} from "react";
import {Button, ThemeButton} from "~shared/ui/Button/Button";
import {CloseIcon} from "~shared/resources/icons/close/CloseIcon";

interface ModalProps {
    modalActive: boolean;
    setModalActive: () => void;
    className?: string;
    children?: ReactNode;
    SetCloseButton?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        modalActive,
        setModalActive,
        className,
        children,
        SetCloseButton = true
    } = props;

    function OnClickCloseModalHandler() {
        setModalActive();
    }

    return (
        <div className={classNames(styles.Modal, {}, [
            className,
            modalActive ? styles.active : ""
        ])}>
            <div className={styles.modalContent}>
                {SetCloseButton ?
                    <Button className={styles.modalButton}
                            onClick={OnClickCloseModalHandler}
                            theme={ThemeButton.CLEAR}>
                        <CloseIcon />
                    </Button>
                    : <></>
                }
                {children}
            </div>
        </div>
    );
};