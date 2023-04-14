import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./SiteBlocker.module.scss";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { AddressBlocker } from "~widgets/AddressBlocker/AddressBlocker";
import { AddNewAddress } from "~pages/SiteBlockerPage/AddNewAddress";
import type { BlockedAddress } from "~app/types/BlockedAddress";
import { newBlockedAddress } from "~app/types/BlockedAddress";
import { addAddress, blockAll, removeAddress, updateAddress } from "~app/reducers/blockedAddresses-slice";
import { useAppDispatch, useAppSelector } from "~store";

const SiteBlockerPage = () => {
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
            <Button
                className={classNames(styles.blockAll)}
                theme={ThemeButton.CLEAR}
                onClick={handleBlockAllButtonClick}
            >
                {addresses.allBlocked ? "Unlock all" : "Block all"}
            </Button>
            <div className={classNames(styles.addressesContainer)}>
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
        </div>
    );
};

export default SiteBlockerPage;