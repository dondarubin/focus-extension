import styles from "./Select.module.scss";
import React, { FC, SelectHTMLAttributes, useRef } from "react";
import { classNames } from "~shared/lib/classNames/classNames";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
    theme?: string;
    OnChangeSwitchTheme?: (event) => void;
}

export const Select: FC<SelectProps> = (props) => {
    const ref = useRef(null);

    const {
        className,
        theme,
        OnChangeSwitchTheme,
        children
    } = props;

    return (
        <select
            ref={ref}
            value={theme}
            onChange={(event) => {
                ref.current.blur();
                OnChangeSwitchTheme(event);
            }}
            className={classNames(styles.Select, {}, [className])}
        >
            {children}
        </select>
    );
};