import React, { FC } from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./ColorRect.module.scss";

type ColorRectProps = {
    className?: string
    color: string
}

export const ColorRect: FC<ColorRectProps> = ({ color, className }) => {
    return (
        <div className={classNames(styles.colorRect, {}, [className])} style={{ background: color }}>
        </div>
    );
};