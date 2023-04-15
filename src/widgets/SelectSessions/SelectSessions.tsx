import React from "react";
import { CustomSelect } from "~shared/ui/CustomSelect/CustomSelect";
import { useAppDispatch, useAppSelector } from "~store";
import { setSessions } from "~app/reducers/settings-slice";

interface SelectSessionsProps {
    className?: string;
}

export const SelectSessions = ({ className }: SelectSessionsProps) => {
    const dispatch = useAppDispatch();
    const sessions = useAppSelector((state) => state.settings.sessions);

    function handleChange(selected: string) {
        dispatch(setSessions(+selected));
    }

    return (
        <CustomSelect
            initValue={sessions.toString()}
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