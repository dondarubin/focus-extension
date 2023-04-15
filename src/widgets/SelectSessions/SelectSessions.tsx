import React from "react";
import { CustomSelect } from "~shared/ui/CustomSelect/CustomSelect";
import { useAppDispatch, useAppSelector } from "~store";
import { setSessionsCount } from "~app/reducers/settings-slice";

interface SelectSessionsProps {
    className?: string;
}

export const SelectSessions = ({ className }: SelectSessionsProps) => {
    const dispatch = useAppDispatch();
    const sessionsCount = useAppSelector((state) => state.settingsValues.sessionsCount);

    function handleChange(selected: string) {
        dispatch(setSessionsCount(+selected));
    }

    return (
        <CustomSelect
            initValue={sessionsCount.toString()}
            className={className}
            OnChange={handleChange}
        >
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </CustomSelect>
    );
};