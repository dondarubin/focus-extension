import React, { FC, ReactNode } from "react";
import { classNames } from "~shared/lib/classNames/classNames";

export type OptionParams = {
    className?: string
    key: string
    value: string
    children: ReactNode | ReactNode[]
    OnClick?: (value: string) => void;
}

export const Option: FC<OptionParams> = (props) => {

    const {
        className,
        key,
        value,
        children,
        OnClick
    } = props;

    return (
        <div
            key={key}
            onClick={() => {
                if (OnClick !== undefined) OnClick(value);
            }}
            className={classNames("CLASS_NAME", {}, [className])}
        >
            {children}
        </div>
    );
};