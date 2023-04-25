import React, { FC } from "react";
import styles from "./FlowTrackerChart.module.scss";
import { BarChart } from "~widgets/FlowTrakerChart/BarChart";
import { classNames } from "~shared/lib/classNames/classNames";

type FlowTrackerChartProps = {
    className?: string
}

export const FlowTrackerChart: FC<FlowTrackerChartProps> = (props) => {
    const {
        className
    } = props;

    return (
        <div className={classNames(styles.FlowTrackerChart, {}, [])}>
            <BarChart data={[3, 1, 5, 2, 3, 1, 13]}></BarChart>
        </div>
    );
};