import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./SiteBlocker.module.scss";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { AddressBlocker } from "~widgets/AddressBlocker/AddressBlocker";
import { AddNewAddress } from "~pages/SiteBlockerPage/AddNewAddress";
import type { BlockedAddress } from "~app/types/BlockedAddress";
import { newBlockedAddress } from "~app/types/BlockedAddress";
import { addAddress, blockAll, removeAddress, updateAddress } from "~app/reducers/blockedAddresses-slice";
import { useAppDispatch, useAppSelector } from "~store";
import { AddressesList } from "~pages/SiteBlockerPage/AddressesList";

const SiteBlockerPage = () => {
    const dispatch = useAppDispatch();
    const allBlocked = useAppSelector((state) => state.blockedAddresses.allBlocked);

    function handleBlockAllButtonClick() {
        dispatch(blockAll(!allBlocked));
    }

    function handleAddNewAddress(addr: BlockedAddress) {
        dispatch(addAddress(addr));
    }

    console.log(allBlocked, "from page");

    return (
        <div className={classNames(styles.layout)}>
            <div className={classNames(styles.title)}>
                Website Blocker
            </div>
            <span className={classNames(styles.titleDescription)}>
                Block sites that interfere with your productivity
            </span>
            <AddNewAddress OnAdd={handleAddNewAddress} />
            <Button
                className={classNames(styles.blockAll)}
                theme={ThemeButton.CLEAR}
                onClick={handleBlockAllButtonClick}
            >
                {allBlocked ? "Unlock all" : "Block all"}
            </Button>
            <AddressesList />
        </div>
    );
};

export default SiteBlockerPage;