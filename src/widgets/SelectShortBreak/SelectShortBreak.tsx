import React from "react";
import { CustomSelect } from "~shared/ui/CustomSelect/CustomSelect";
import { useAppDispatch, useAppSelector } from "~store";
import { setShortBreakTime } from "~app/reducers/settings-slice";
import { minString2Number } from "~shared/lib/helpers/minString2Number";

interface SelectShortBreakProps {
    className?: string;
}

export const SelectShortBreak = ({ className }: SelectShortBreakProps) => {
    const dispatch = useAppDispatch();
    const shortBreakTimeValue = useAppSelector((state) => state.settingsValues.shortBreakTime);

    function handleChange(selected: string) {
        dispatch(setShortBreakTime(minString2Number(selected)));
    }

    return (
        <CustomSelect
            initValue={`${shortBreakTimeValue} min`}
            className={className}
            OnChange={handleChange}
        >
            <div>5 min</div>
            <div>7 min</div>
            <div>10 min</div>
        </CustomSelect>
    );
};