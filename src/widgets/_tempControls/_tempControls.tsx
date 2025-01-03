import { setState, TomatoStates } from "~app/reducers/tomato-slice";
import { useAppDispatch, useAppSelector } from "~store";
import React, { FC } from "react";
import { ModalsNames, setModalActive } from "~app/reducers/modals-slice";


export const _tempControls: FC = () => {
    const tomatoState = useAppSelector(state => state.tomato.state);
    const dispatch = useAppDispatch();

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setState(event.target.value as TomatoStates));
    };

    function OnClickOpenTimerEndModalHandler() {
        dispatch(setModalActive({
            ModalName: ModalsNames.TIMER_END,
            active: true
        }));
    }

    return (
        <div style={{ position: "absolute", zIndex: 100 }}>
            <button onClick={OnClickOpenTimerEndModalHandler}>Activate modal</button>
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