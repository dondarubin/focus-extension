import React, { useEffect, useState } from "react";
import styles from "./MainPage.module.scss";
import { NavMainPage } from "~pages/MainPage/Nav/NavMainPage";
import { ContentMainPage } from "~pages/MainPage/Content/ContentMainPage";
import { SettingsModal } from "~widgets/Modals/SettingsModal/SettingsModal";
import { ChooseTaskModal } from "~widgets/Modals/ChooseTaskModal/ChooseTaskModal";
import { GuideModal } from "~widgets/Modals/GuideModal/GuideModal";
import { Navigate } from "react-router-dom";
import { RoutePath } from "~shared/config/routeConfig/routeConfig";
import { useInitialPage } from "~shared/hooks/useInitialPage";
import { WelcomeModal } from "~widgets/Modals/WelcomeModal/WelcomeModal";
import { useShowWelcome } from "~shared/hooks/useShowWelcome";
import { _tempControls } from "~widgets/_tempControls/_tempControls";

const MainPage = () => {
    const initialPage = useInitialPage();
    const showWelcome = useShowWelcome();

    return (

        <div className={styles.MainPage}>
            <_tempControls />

            {initialPage !== RoutePath.main && <Navigate replace to={initialPage} />}
            <SettingsModal />
            <ChooseTaskModal />
            <GuideModal />
            {showWelcome === null ? <WelcomeModal /> : <></>}

            <NavMainPage />
            <ContentMainPage />
        </div>
    );
};

export default MainPage;