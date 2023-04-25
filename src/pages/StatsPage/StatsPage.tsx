import React from "react";
import { NavStatsPage } from "~pages/StatsPage/Nav/NavStatsPage";
import { FlowTrackerChart } from "~widgets/FlowTrakerChart/FlowTrackerChart";
import styles from "./StatsPage.module.scss";


const StatsPage = () => {
    return (
        <div>
            <NavStatsPage />
            <div className={styles.ContentStatsPage}>
                <FlowTrackerChart />
            </div>
        </div>
    );
};

export default StatsPage;