import { Select } from "~shared/ui/Select/Select";
import React from "react";

interface SelectLongBreakProps {
    className?: string;
}

export const SelectLongBreak = ({ className }: SelectLongBreakProps) => {
    return (
        <Select
            className={className}
            OnChange={() => {
            }}
        >
            <option key={"10"} value="10" className={"selectOption"}>
                10 min
            </option>
            <option key={"15"} value="15" className={"selectOption"}>
                15 min
            </option>
            <option key={"20"} value="20" className={"selectOption"}>
                20 min
            </option>
        </Select>
    );
};