import type { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '~shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    DEFAULT = 'default'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(
                styles.Button,
                {},
                [className, styles[theme]],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};