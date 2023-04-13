import React, { FC, useEffect, useState } from "react";
import styles from "./AddressBlocker.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { UnlockIcon } from "~shared/resources/icons/UnlockIcon";
import { SmallCrossIcon } from "~shared/resources/icons/SmallCrossIcon";
import { BlockIcon } from "~shared/resources/icons/block/BlockIcon";

type AddressBlockerProps = {
    className?: string
    address: string
    blockedInit?: boolean
    OnBlock?: (block: boolean, addr: string) => void
    OnDelete?: (block: boolean, addr: string) => void
}

export const AddressBlocker: FC<AddressBlockerProps> = (props) => {
    const {
        className,
        address,
        blockedInit,
        OnBlock,
        OnDelete
    } = props;

    const [blocked, setBlocked] = useState(blockedInit);

    console.log(blockedInit, address)

    useEffect(() => {
        setBlocked(blockedInit);
    }, [blockedInit]);

    function handleLockButtonClick() {
        setBlocked(!blocked);
        OnBlock(blocked, address);
    }

    function handleDeleteButtonClick() {
        OnDelete(blocked, address);
    }

    return (
        <div className={classNames(styles.addressBlockerContainer, {}, [className])}>
            <Button className={classNames(styles.lockButton, {}, [!blocked ? "" : styles.lockButtonLocked])}
                    theme={!blocked ? ThemeButton.DEFAULT : ThemeButton.CLEAR}
                    onClick={handleLockButtonClick}
            >
                {!blocked ? <UnlockIcon color={"white"} /> : <BlockIcon color={"white"} />}
            </Button>
            <div className={classNames(styles.addressContainer)}>
                <span>{address}</span>
                <Button
                    className={classNames(styles.deleteButton)}
                    theme={ThemeButton.CLEAR}
                    onClick={handleDeleteButtonClick}
                >
                    <SmallCrossIcon color={"#CDCDCD"} />
                </Button>
            </div>
        </div>
    );
};