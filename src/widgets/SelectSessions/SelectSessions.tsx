import { Select } from "~shared/ui/Select/Select";
import React from "react";

interface SelectSessionsProps {
    className?: string;
}

export const SelectSessions = ({ className }: SelectSessionsProps) => {
    return (
        <Select
            className={className}
        >
            <option key={"2"} value="2" className={"selectOption"}>
                2 min
            </option>
            <option key={"4"} value="4" className={"selectOption"}>
                4 min
            </option>
            <option key={"6"} value="6" className={"selectOption"}>
                6 min
            </option>
        </Select>
    );
};