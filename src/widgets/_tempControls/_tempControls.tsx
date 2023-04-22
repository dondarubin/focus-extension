import { setState, TomatoStates } from "~app/reducers/tomato-slice";
import { useAppDispatch, useAppSelector } from "~store";
import React, { FC } from "react";


export const _tempControls: FC = () => {
    const tomatoState = useAppSelector(state => state.tomato.state);
    const dispatch = useAppDispatch();

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setState(event.target.value as TomatoStates));
    };

    return (
        <div style={{ position: "absolute", zIndex: 100 }}>
            <select id="my-select" value={tomatoState} onChange={handleSelectChange}>
                {Object.values(TomatoStates).map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};