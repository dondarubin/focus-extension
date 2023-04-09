import { Select } from "~shared/ui/Select/Select";
import React from "react";

interface SelectSessionsProps {
    className?: string;
}

export const SelectSessions = ({ className }: SelectSessionsProps) => {
    return (
        <Select
            className={className}
            OnChange={() => {
            }}
        >
            <option key={"1"} value="1" className={"selectOption"}>
                1
            </option>
            <option key={"2"} value="2" className={"selectOption"}>
                2
            </option>
            <option key={"3"} value="3" className={"selectOption"}>
                3
            </option>
            <option key={"4"} value="4" className={"selectOption"}>
                4
            </option>
        </Select>
    );
};