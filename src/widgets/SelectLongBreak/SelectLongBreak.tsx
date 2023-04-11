import React from "react";
import {CustomSelect} from "~shared/ui/CustomSelect/CustomSelect";

interface SelectLongBreakProps {
    className?: string;
}

export const SelectLongBreak = ({ className }: SelectLongBreakProps) => {
    return (
        <CustomSelect
            initValue={'10 min'}
            className={className}
            OnChange={() => {
            }}
        >
            <div>10 min</div>
            <div>15 min</div>
            <div>20 min</div>
        </CustomSelect>
    );
};