import { Select } from "~shared/ui/Select/Select";
import React from "react";
import { CustomSelect } from "~shared/ui/CustomSelect/CustomSelect";

interface SelectShortBreakProps {
    className?: string;
}

export const SelectShortBreak = ({ className }: SelectShortBreakProps) => {
    return (
        <CustomSelect
            initValue={'7 min'}
            className={className}
            OnChange={(selected) => {
            }}
        >
            <div className={"selectOption"}>
                5 min
            </div>
            <div className={"selectOption"}>
                7 min
            </div>
            <div className={"selectOption"}>
                10 min
            </div>
        </CustomSelect>
    );
};