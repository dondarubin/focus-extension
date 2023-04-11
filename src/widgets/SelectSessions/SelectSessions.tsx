import React from "react";
import {CustomSelect} from "~shared/ui/CustomSelect/CustomSelect";

interface SelectSessionsProps {
    className?: string;
}

export const SelectSessions = ({ className }: SelectSessionsProps) => {
    return (
        <CustomSelect
            initValue={'1'}
            className={className}
            OnChange={() => {
            }}
        >
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </CustomSelect>
    );
};