import React, { useState } from "react";
import styles from "./MainPage.module.scss";
import { NavMainPage } from "~pages/MainPage/Nav/NavMainPage";
import { ContentMainPage } from "~pages/MainPage/Content/ContentMainPage";
import { SettingsModal } from "~widgets/SettingsModal/SettingsModal";
import { ChooseTaskModal } from "~widgets/ChooseTaskModal/ChooseTaskModal";
import { GuideModal } from "~widgets/GuideModal/GuideModal";
import { Navigate } from "react-router-dom";
import { RoutePath } from "~shared/config/routeConfig/routeConfig";
import { AppRotes } from "~app/reducers/router-slice";
import LocalStorageKeys from "~app/storage/LocalStorageKeys";

const MainPage = () => {
    const [settingsModalActive, setSettingsModalActive] = useState(false);
    const [chooseTaskModalActive, setChooseTaskModalActive] = useState(false);
    const [guideModalActive, setGuideModalActive] = useState(false);

    // TODO: Refactor this shit or replace with redux useAppState
    let initialPage = localStorage.getItem(LocalStorageKeys.INITIAL_PAGE) || RoutePath.main;

    function isAppRoute(path: string): path is AppRotes {
        return Object.values(AppRotes).includes(path as AppRotes);
    }

    if (initialPage !== null && isAppRoute(initialPage)) {
        initialPage = RoutePath[initialPage];
        if (initialPage === undefined) {
            initialPage = RoutePath.main;
        }
    } else {
        initialPage = RoutePath.main;
    }

    return (
        <div className={styles.MainPage}>
            {initialPage !== RoutePath.main && <Navigate replace to={initialPage} />}
            <NavMainPage setSettingsModalActive={setSettingsModalActive} />
            <ContentMainPage setChooseTaskModalActive={setChooseTaskModalActive} />

            <SettingsModal settingsModalActive={settingsModalActive}
                           setSettingsModalActive={setSettingsModalActive}
                           setGuideModalActive={setGuideModalActive}
            />
            <ChooseTaskModal chooseTaskModalActive={chooseTaskModalActive}
                             setChooseTaskModalActive={setChooseTaskModalActive}
            />
            <GuideModal guideModalActive={guideModalActive}
                        setGuideModalActive={setGuideModalActive}
            />
        </div>
    );
};

export default MainPage;