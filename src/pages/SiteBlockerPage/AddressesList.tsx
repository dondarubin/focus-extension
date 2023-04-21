import React, { FC, useEffect, useRef, useState } from "react";
import type { BlockedAddress } from "~app/types/BlockedAddress";
import { classNames } from "~shared/lib/classNames/classNames";
import styles from "~pages/SiteBlockerPage/SiteBlocker.module.scss";
import { AddressCard } from "~widgets/AddressBlocker/AddressCard";
import { newBlockedAddress } from "~app/types/BlockedAddress";
import { blockAll, removeAddress, updateAddress } from "~app/reducers/blockedAddresses-slice";
import { useAppDispatch, useAppSelector } from "~store";
import { BlockPageManIcon } from "~shared/resources/icons/people/BlockPageManIcon";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { toast } from "react-toastify";

type AddressesListProps = {
    className?: string
}

export const AddressesList: FC<AddressesListProps> = (props) => {
    const {
        className
    } = props;

    const dispatch = useAppDispatch();
    const addresses = useAppSelector((state) => state.blockedAddresses);

    function handleBlockAllButtonClick() {
        dispatch(blockAll(!addresses.allBlocked));
    }

    function handleBlock(addr: BlockedAddress) {
        dispatch(updateAddress(addr));
    }

    function handleDelete(addr: BlockedAddress) {
        dispatch(removeAddress(addr.addr));
    }

    const _blockAllButton = () => {
        return (
            <Button
                className={styles.blockAll}
                theme={ThemeButton.CLEAR}
                onClick={handleBlockAllButtonClick}
            >
                {addresses.allBlocked ? "Unlock all" : "Block all"}
            </Button>
        );
    };

    const _addressesList = () => {
        return (
            <>
                {addresses.addresses.map((addr, index) => {
                    return (
                        <AddressCard
                            className={""}
                            key={addr.addr}
                            address={newBlockedAddress(addr.addr, addr.blocked)}
                            OnBlock={handleBlock}
                            OnDelete={handleDelete}
                        />
                    );
                })}
            </>
        );
    };

    const _noDataIcon = () => {
        return (
            <div className={styles.noDataIconContainer}>
                <BlockPageManIcon />
            </div>
        );
    };

    return (
        <>
            {addresses.addresses.length !== 0 ? <_blockAllButton /> : <></>}
            <div className={classNames(styles.addressesContainer, {}, [className])}>
                {addresses.addresses.length !== 0 ? <_addressesList /> : <_noDataIcon />}
            </div>
        </>
    );
};
