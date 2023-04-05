import styles from "./Select.module.scss";
import React, { FC, SelectHTMLAttributes } from "react";
import { classNames } from "~shared/lib/classNames/classNames";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
    theme?: string;
    OnClickToggleTheme?: (event) => void;
}

export const Select: FC<SelectProps> = (props) => {
    const {
        className,
        theme,
        OnClickToggleTheme,
        children
    } = props;

    return (
        <select
            value={theme}
            onChange={OnClickToggleTheme}
            className={classNames(styles.Select, {}, [className])}
        >
            {children}
        </select>
    );
};