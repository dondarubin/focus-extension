import type { ButtonHTMLAttributes, FC, MouseEventHandler } from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ThemeButton {
    CLEAR = "clear",
    DEFAULT = "default"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    onClick?: MouseEventHandler<any>;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        onClick,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(
                styles.Button,
                {},
                [className, styles[theme]]
            )}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </button>
    );
};
