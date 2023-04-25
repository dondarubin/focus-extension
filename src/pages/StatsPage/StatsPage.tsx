import React from "react";
import { NavStatsPage } from "~pages/StatsPage/Nav/NavStatsPage";
import styles from "./StatsPage.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { ContentStatsPage } from "~pages/StatsPage/Content/ContentStatsPage";
import { RewardsModal } from "~widgets/RewardsModal/RewardsModal";


const StatsPage = () => {
    return (
        <div className={classNames(styles.StatsPage, {}, [])}>
            <RewardsModal />

            <NavStatsPage />
            <ContentStatsPage />
        </div>
    );
};

export default StatsPage;