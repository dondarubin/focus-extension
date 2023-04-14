import React, { FC, useEffect, useState } from "react";
import styles from "./AddressBlocker.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { UnlockIcon } from "~shared/resources/icons/UnlockIcon";
import { SmallCrossIcon } from "~shared/resources/icons/SmallCrossIcon";
import { BlockIcon } from "~shared/resources/icons/block/BlockIcon";
import type { BlockedAddress } from "~app/types/BlockedAddress";
import { newBlockedAddress } from "~app/types/BlockedAddress";

type AddressBlockerProps = {
    className?: string
    address: BlockedAddress
    blockedInit?: boolean
    OnBlock?: (addr: BlockedAddress) => void
    OnDelete?: (addr: BlockedAddress) => void
}

export const AddressBlocker: FC<AddressBlockerProps> = (props) => {
    const {
        className,
        address,
        OnBlock,
        OnDelete
    } = props;

    const [blockedAddr, setBlockedAddr] = useState<BlockedAddress>(address);

    useEffect(() => {
        setBlockedAddr(address);
    }, [address.blocked]);

    function handleLockButtonClick() {
        setBlockedAddr(newBlockedAddress(blockedAddr.addr, !blockedAddr.blocked));
        OnBlock(blockedAddr);
    }

    function handleDeleteButtonClick() {
        OnDelete(blockedAddr);
    }

    return (
        <div className={classNames(styles.addressBlockerContainer, {}, [className])}>
            <Button className={classNames(styles.lockButton, {}, [!blockedAddr.blocked ? "" : styles.lockButtonLocked])}
                    theme={!blockedAddr.blocked ? ThemeButton.DEFAULT : ThemeButton.CLEAR}
                    onClick={handleLockButtonClick}
            >
                {!blockedAddr.blocked ? <UnlockIcon color={"white"} /> : <BlockIcon color={"white"} />}
            </Button>
            <div className={classNames(styles.addressContainer)}>
                <span>{address.addr}</span>
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