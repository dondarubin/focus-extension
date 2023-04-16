import React from "react";

export const TimerArrowIcon = (props: { color: string }) => {
    return (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.89144 9.24525C5.52086 9.97464 4.47896 9.97464 4.10838 9.24525L0.403397 1.95296C0.0654013 1.2877 0.548733 0.5 1.29493 0.5H8.70489C9.45109 0.5 9.93442 1.2877 9.59643 1.95296L5.89144 9.24525Z"
                fill={props.color} />
        </svg>

    );
};