import React, { FC } from "react";
import type { BlockedAddress } from "~app/types/BlockedAddress";
import { classNames } from "~shared/lib/classNames/classNames";
import styles from "~pages/SiteBlockerPage/SiteBlocker.module.scss";
import { AddressBlocker } from "~widgets/AddressBlocker/AddressBlocker";
import { newBlockedAddress } from "~app/types/BlockedAddress";
import { removeAddress, updateAddress } from "~app/reducers/blockedAddresses-slice";
import { useAppDispatch, useAppSelector } from "~store";

type AddressesListProps = {
    className?: string
}

export const AddressesList: FC<AddressesListProps> = (props) => {
    const dispatch = useAppDispatch();
    const addresses = useAppSelector((state) => state.blockedAddresses);

    function handleBlock(addr: BlockedAddress) {
        dispatch(updateAddress(addr));
    }

    function handleDelete(addr: BlockedAddress) {
        dispatch(removeAddress(addr.addr));
    }

    console.log('from list')

    return (
        <div className={classNames(styles.addressesContainer, {}, [props.className])}>
            {addresses.addresses.map(addr => {
                return (
                    <AddressBlocker
                        key={addr.addr}
                        address={newBlockedAddress(addr.addr, addr.blocked)}
                        OnBlock={handleBlock}
                        OnDelete={handleDelete}
                    />
                );
            })}
        </div>
    );
};