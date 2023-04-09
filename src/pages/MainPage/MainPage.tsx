import React, { useState } from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./MainPage.module.scss";
import { NavMainPage } from "~pages/MainPage/Nav/NavMainPage";
import { ContentMainPage } from "~pages/MainPage/Content/ContentMainPage";
import { SettingsModal } from "~widgets/SettingsModal/SettingsModal";
import { WelcomeModal } from "~widgets/GuideModal/WelcomeModal";

const MainPage = () => {
    const [modalActive, setModalActive] = useState(false);
    const [guideModalActive, setGuideModalActive] = useState(true);

    return (
        <div className={classNames(styles.MainPage, {}, [])}>
            <WelcomeModal></WelcomeModal>
            <NavMainPage setModalActive={setModalActive} />
            <ContentMainPage />
            <SettingsModal modalActive={modalActive} setModalActive={setModalActive} />
        </div>
    );
};

export default MainPage;