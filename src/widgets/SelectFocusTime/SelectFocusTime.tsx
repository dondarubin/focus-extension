import React from "react";
import { CustomSelect } from "~shared/ui/CustomSelect/CustomSelect";

interface SelectTimeProps {
    className?: string;
}

export const SelectFocusTime = ({ className }: SelectTimeProps) => {
    return (
        <CustomSelect
            initValue={"20 min"}
            className={className}
            OnChange={() => {
            }}
        >
            <div>20 min</div>
            <div>25 min</div>
            <div>30 min</div>
        </CustomSelect>
    );
};