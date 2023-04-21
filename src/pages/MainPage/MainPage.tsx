import React, { useEffect, useState } from "react";
import styles from "./MainPage.module.scss";
import { NavMainPage } from "~pages/MainPage/Nav/NavMainPage";
import { ContentMainPage } from "~pages/MainPage/Content/ContentMainPage";
import { SettingsModal } from "~widgets/SettingsModal/SettingsModal";
import { ChooseTaskModal } from "~widgets/ChooseTaskModal/ChooseTaskModal";
import { GuideModal } from "~widgets/GuideModal/GuideModal";
import { Navigate } from "react-router-dom";
import { RoutePath } from "~shared/config/routeConfig/routeConfig";
import { useInitialPage } from "~shared/hooks/useInitialPage";
import { WelcomeModal } from "~widgets/WelcomeModal/WelcomeModal";
import { useAppSelector } from "~store";
import { useShowWelcome } from "~shared/hooks/useShowWelcome";

const MainPage = () => {
    const initialPage = useInitialPage();
    const showWelcome = useShowWelcome();

    return (
        <div className={styles.MainPage}>
            {initialPage !== RoutePath.main && <Navigate replace to={initialPage} />}
            <SettingsModal />
            <ChooseTaskModal />
            <GuideModal />
            
            <NavMainPage />
            <ContentMainPage />

            {showWelcome === null ? <WelcomeModal /> : <></>}
        </div>
    );
};

export default MainPage;