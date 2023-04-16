import styles from "./SiteBlocker.module.scss";
import { AddNewAddress } from "~pages/SiteBlockerPage/AddNewAddress";
import type { BlockedAddress } from "~app/types/BlockedAddress";
import { addAddress } from "~app/reducers/blockedAddresses-slice";
import { useAppDispatch } from "~store";
import { AddressesList } from "~pages/SiteBlockerPage/AddressesList";

const SiteBlockerPage = () => {


    return (
        <div className={styles.layout}>
            <div className={styles.title}>
                Website Blocker
            </div>
            <span className={styles.titleDescription}>
                Block sites that interfere with your productivity
            </span>
            <AddNewAddress />
            <AddressesList />
            
        </div>
    );
};

export default SiteBlockerPage;