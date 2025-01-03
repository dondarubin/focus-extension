import React, { FC } from "react";
import styles from "./AddressCard.module.scss";
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

export const AddressCard: FC<AddressBlockerProps> = (props) => {
    const {
        className,
        address,
        OnBlock,
        OnDelete
    } = props;

    function handleLockButtonClick() {
        OnBlock(newBlockedAddress(address.addr, !address.blocked));
    }

    function handleDeleteButtonClick() {
        OnDelete(address);
    }

    function formatAddress(addr: string): string {
        return addr.replace(/https?:\/\//, "");
    }

    return (
        <div className={classNames(styles.addressCardContainer, {}, [className])}>
            <Button className={classNames(styles.lockButton, {}, [!address.blocked ? "" : styles.lockButtonLocked])}
                    theme={!address.blocked ? ThemeButton.DEFAULT : ThemeButton.CLEAR}
                    onClick={handleLockButtonClick}
            >
                {!address.blocked ? <UnlockIcon color={"white"} /> : <BlockIcon color={"white"} />}
            </Button>
            <div className={styles.addressContainer}>
                <span>{formatAddress(address.addr)}</span>
                <Button
                    className={styles.deleteButton}
                    theme={ThemeButton.CLEAR}
                    onClick={handleDeleteButtonClick}
                >
                    <SmallCrossIcon color={"#CDCDCD"} />
                </Button>
            </div>
        </div>
    );
};