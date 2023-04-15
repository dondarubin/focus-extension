import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./SiteBlocker.module.scss";
import { AddNewAddress } from "~pages/SiteBlockerPage/AddNewAddress";
import type { BlockedAddress } from "~app/types/BlockedAddress";
import { addAddress } from "~app/reducers/blockedAddresses-slice";
import { useAppDispatch } from "~store";
import { AddressesList } from "~pages/SiteBlockerPage/AddressesList";

const SiteBlockerPage = () => {


    return (
        <div className={classNames(styles.layout)}>
            <div className={classNames(styles.title)}>
                Website Blocker
            </div>
            <span className={classNames(styles.titleDescription)}>
                Block sites that interfere with your productivity
            </span>
            <AddNewAddress />
            <AddressesList />
            
        </div>
    );
};

export default SiteBlockerPage;