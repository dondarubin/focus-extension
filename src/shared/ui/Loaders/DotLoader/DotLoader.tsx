import React, { FC } from "react";
import "./DotLoader.css";

export const DotLoader: FC = () => {
    return (
        <div className="lds-roller-wrapper">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};