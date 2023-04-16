import React, { FC } from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import styles from "~pages/SiteBlockerPage/SiteBlocker.module.scss";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { MarkIcon } from "~shared/resources/icons/MarkIcon";
import { useInput } from "~shared/hooks/useInput";
import type { BlockedAddress } from "~app/types/BlockedAddress";
import { newBlockedAddress } from "~app/types/BlockedAddress";

type AddNewAddressProps = {
    className?: string
    OnAdd: (addr: BlockedAddress) => void
}

export const AddNewAddress: FC<AddNewAddressProps> = (props) => {
    const {
        className,
        OnAdd
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

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        OnAdd(newBlockedAddress(value, true));
        clear();
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
                theme={ThemeButton.DEFAULT}
            >
                <MarkIcon color={"var(--contrast-color)"} />
            </Button>
        </form>
    );
};