import React, { useRef, useState } from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./SiteBlocker.module.scss";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { MarkIcon } from "~shared/resources/icons/MarkIcon";
import { AddressBlocker } from "~widgets/AddressBlocker/AddressBlocker";

const mock_addresses = [
    {
        addr: "vk.com",
        blocked: false
    },
    {
        addr: "mama.ru",
        blocked: true
    },
    {
        addr: "ddpornhub.com",
        blocked: false
    },
    {
        addr: "pornhub.com",
        blocked: false
    },
    {
        addr: "pornhubd.com",
        blocked: true
    },
    {
        addr: "pornfhub.com",
        blocked: false
    },
    {
        addr: "pornshub.com",
        blocked: false
    },
    {
        addr: "pofrnhub.com",
        blocked: true
    }
];

// TODO изменение значения blocked у адресса в массиве

const SiteBlockerPage = () => {
    const [addresses, setAddresses] = useState(mock_addresses);
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

    function handleBlock(blocked: boolean, addr: string) {
        blockAllButtonStateController(blocked);
    }

    function handleDelete(blocked: boolean, addr: string) {
        //TODO check if address is removed and then call addressCountReduce
        addressesCountReduce(blocked);
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

    return (
        <div className={classNames(styles.layout)}>
            <div className={classNames(styles.title)}>
                Website Blocker
            </div>
            <span className={classNames(styles.titleDescription)}>
                Block sites that interfere with your productivity
            </span>
            <div className={classNames(styles.addAddressContainer)}>
                {/*<input type={"text"} value={"Add address"}></input>*/}
                <Button
                    className={classNames(styles.addingButton)}
                    theme={ThemeButton.DEFAULT}>
                    <MarkIcon color={"var(--contrast-color)"} />
                </Button>
            </div>
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
                            address={addr.addr}
                            blockedInit={blocked}
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