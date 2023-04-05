import { Select } from "~shared/ui/Select/Select";
import React from "react";

interface SelectTimeProps {
    className?: string;
}

export const SelectFocusTime = ({ className }: SelectTimeProps) => {
    return (
        <Select
            className={className}
        >
            <option key={"20"} value="20" className={"selectOption"}>
                20 min
            </option>
            <option key={"25"} value="25" className={"selectOption"}>
                25 min
            </option>
            <option key={"30"} value="30" className={"selectOption"}>
                30 min
            </option>
        </Select>
    );
};