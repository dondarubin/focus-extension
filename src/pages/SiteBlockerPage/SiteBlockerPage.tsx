import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./SiteBlocker.module.scss";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { AddressBlocker } from "~widgets/AddressBlocker/AddressBlocker";
import { AddNewAddress } from "~pages/SiteBlockerPage/AddNewAddress";
import type { BlockedAddress } from "~app/types/BlockedAddress";
import { addAddress, blockAll } from "~app/reducers/blockedAddresses-slice";
import { useAppDispatch, useAppSelector } from "~store";
import { AddressesList } from "~pages/SiteBlockerPage/AddressesList";

const SiteBlockerPage = () => {
    const dispatch = useAppDispatch();

    function handleAddNewAddress(addr: BlockedAddress) {
        dispatch(addAddress(addr));
    }

    return (
        <div className={classNames(styles.layout)}>
            <div className={classNames(styles.title)}>
                Website Blocker
            </div>
            <span className={classNames(styles.titleDescription)}>
                Block sites that interfere with your productivity
            </span>
            <AddNewAddress OnAdd={handleAddNewAddress} />

            <AddressesList />
        </div>
    );
};

export default SiteBlockerPage;