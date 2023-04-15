import React from "react";
import { CustomSelect } from "~shared/ui/CustomSelect/CustomSelect";
import { useAppDispatch, useAppSelector } from "~store";
import { setLongBreakTime } from "~app/reducers/settings-slice";
import { minString2Number } from "~shared/lib/helpers/minString2Number";

interface SelectLongBreakProps {
    className?: string;
}

export const SelectLongBreak = ({ className }: SelectLongBreakProps) => {
    const dispatch = useAppDispatch();
    const longBreakTimeValue = useAppSelector((state) => state.settingsValues.longBreakTime);

    function handleChange(selected: string) {
        dispatch(setLongBreakTime(minString2Number(selected)));
    }

    return (
        <CustomSelect
            initValue={`${longBreakTimeValue} min`}
            className={className}
            OnChange={handleChange}
        >
            <div>10 min</div>
            <div>15 min</div>
            <div>20 min</div>
        </CustomSelect>
    );
};