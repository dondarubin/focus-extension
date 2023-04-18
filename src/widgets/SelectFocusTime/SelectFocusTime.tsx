import React from "react";
import { CustomSelect } from "~shared/ui/CustomSelect/CustomSelect";
import { useAppDispatch, useAppSelector } from "~store";
import { setFocusTime } from "~app/reducers/settings-slice";
import { minString2Number } from "~shared/lib/helpers/minString2Number";

interface SelectTimeProps {
    className?: string;
}

export const SelectFocusTime = ({ className }: SelectTimeProps) => {
    const dispatch = useAppDispatch();
    const focusTimeValue = useAppSelector((state) => state.settingsValues.focusTime);

    function handleChange(selected: string) {
        dispatch(setFocusTime(minString2Number(selected)));
    }

    return (
        <CustomSelect
            initValue={`${focusTimeValue} min`}
            className={className}
            OnChange={handleChange}
        >
            <div>20 min</div>
            <div>25 min</div>
            <div>30 min</div>
        </CustomSelect>
    );
};