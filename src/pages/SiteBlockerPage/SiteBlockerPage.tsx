import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./SiteBlocker.module.scss";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { AddressBlocker } from "~widgets/AddressBlocker/AddressBlocker";
import { useRef, useState } from "react";
import { LocalStoreHelper } from "~shared/lib/helpers/LocalStoreHelper";
import LSKeys from "~app/storage/LocalStorageKeys";
import { AddNewAddress } from "~pages/SiteBlockerPage/AddNewAddress";
import type { BlockedAddress } from "~app/types/BlockedAddress";
import { newBlockedAddress } from "~app/types/BlockedAddress";
import { addAddress, removeAddress, updateAddress } from "~app/reducers/blockedAddresses-slice";
import { useAppDispatch, useAppSelector } from "~store";

//LocalStoreHelper.setObj(LSKeys.BlockedSites, mock_addresses, true);

// TODO изменение значения blocked у адресса в массиве

const SiteBlockerPage = () => {
    const [addresses, setAddresses] = useState(LocalStoreHelper.getArray(LSKeys.BlockedSites));
    const [blockAll, setBlockAll] = useState<boolean>(false);

    const addressesCount = useRef<number>(addresses.length);
    const blockedAddressedCount = useRef<number>(addresses.filter(addr => addr.blocked === true).length);

    function handleBlockAllButtonClick() {
        setBlockAll(!blockAll);
        if (blockAll) {
            blockedAddressedCount.current = 0;
        } else {
            blockedAddressedCount.current = addressesCount.current;
        }
    }

    function handleBlock(addr: BlockedAddress) {
        blockAllButtonStateController(addr.blocked);
    }

    function handleDelete(addr: BlockedAddress) {
        //TODO check if address is removed and then call addressCountReduce
        LocalStoreHelper.deleteFromArray(LSKeys.BlockedSites, addr);
        addressesCountReduce(addr.blocked);
        setAddresses(addresses.filter(address => address.addr !== addr));
    }

    function addressesCountReduce(blocked: boolean) {
        addressesCount.current--;
        if (blocked) {
            blockedAddressedCount.current--;
        }
    }

    function blockAllButtonStateController(blocked: boolean) {
        //check if all blocked
        if (blockedAddressedCount.current === addressesCount.current - 1) {
            setBlockAll(true);
        }
        //check if all unlocked
        if (blockedAddressedCount.current === addressesCount.current - (addressesCount.current - 1) && blockAll) {
            setBlockAll(false);
        }

        if (!blocked) {
            blockedAddressedCount.current++;
        } else {
            blockedAddressedCount.current--;
        }
    }

    function handleAddNewAddress(addr: BlockedAddress) {

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
                {blockAll ? "Unlock all" : "Block all"}
            </Button>
            <div className={classNames(styles.addressesContainer)}>
                {addresses.map(addr => {
                    const blocked = blockAll ? true : addr.blocked;

                    return (
                        <AddressBlocker
                            key={addr.addr}
                            address={newBlockedAddress(addr.addr, blocked)}
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