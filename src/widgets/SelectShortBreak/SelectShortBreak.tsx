import { Select } from "~shared/ui/Select/Select";
import React from "react";

interface SelectShortBreakProps {
    className?: string;
}

export const SelectShortBreak = ({ className }: SelectShortBreakProps) => {
    return (
        <Select
            className={className}
            OnChange={() => {
            }}
        >
            <option key={"5"} value="5" className={"selectOption"}>
                5 min
            </option>
            <option key={"7"} value="7" className={"selectOption"}>
                7 min
            </option>
            <option key={"10"} value="10" className={"selectOption"}>
                10 min
            </option>
        </Select>
    );
};