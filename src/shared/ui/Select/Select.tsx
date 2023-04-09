import styles from "./Select.module.scss";
import React, { FC, SelectHTMLAttributes, useRef } from "react";
import { classNames } from "~shared/lib/classNames/classNames";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
    Value?: string;
    OnChange?: (event) => void;
}

export const Select: FC<SelectProps> = (props) => {
    const ref = useRef(null);

    const {
        className,
        Value,
        OnChange,
        children
    } = props;

    return (
        <select
            ref={ref}
            value={Value}
            onChange={(event) => {
                ref.current.blur();
                OnChange(event);
            }}
            className={classNames(styles.Select, {}, [className])}
        >
            {children}
        </select>
    );
};