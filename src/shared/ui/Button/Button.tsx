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
    OnClick?: MouseEventHandler<any>;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        OnClick,
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
            onClick={OnClick}
            {...otherProps}
        >
            {children}
        </button>
    );
};
