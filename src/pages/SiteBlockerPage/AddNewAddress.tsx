import React, { FC } from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import styles from "~pages/SiteBlockerPage/SiteBlocker.module.scss";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { SmallMarkIcon } from "~shared/resources/icons/SmallMarkIcon";
import { useInput } from "~shared/hooks/useInput";
import { newBlockedAddress } from "~app/types/BlockedAddress";
import { useAppDispatch } from "~store";
import { addAddress } from "~app/reducers/blockedAddresses-slice";
import { extractBaseUrl } from "~shared/lib/helpers/extractBaseUrl";
import notify = chrome.fileSystemProvider.notify;
import notifications = chrome.contentSettings.notifications;
import { toast } from "react-toastify";

type AddNewAddressProps = {
    className?: string
}

export const AddNewAddress: FC<AddNewAddressProps> = (props) => {
    const {
        className
    } = props;

    const {
        placeholder,
        onChange,
        value,
        onFocus,
        onSubmit,
        clear,
        onBlur
    } = useInput("", true, true, "Add Address");

    const dispatch = useAppDispatch();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        let _value = extractBaseUrl(value);
        if (_value !== null) {
            dispatch(addAddress(newBlockedAddress(_value, true)));
            clear();
        } else {
            toast.error("Invalid url");
        }
    }

    return (
        <form onSubmit={handleSubmit} className={classNames(styles.addAddressContainer, {}, [className])}>
            <input
                type={"text"}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                onSubmit={onSubmit}
                value={value}
            />
            <Button
                type={"submit"}
                className={styles.addingButton}
                theme={ThemeButton.CLEAR}
            >
                <SmallMarkIcon color={"var(--contrast-color)"} />
            </Button>
        </form>
    );
};