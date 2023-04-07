import React, { useState } from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./MainPage.module.scss";
import { NavMainPage } from "~pages/MainPage/Nav/NavMainPage";
import { ContentMainPage } from "~pages/MainPage/Content/ContentMainPage";
import { SettingsModal } from "~widgets/SettingsModal/SettingsModal";

const MainPage = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className={classNames(styles.MainPage, {}, [])}>
            <NavMainPage setModalActive={setModalActive} />
            <ContentMainPage />
            <SettingsModal modalActive={modalActive} setModalActive={setModalActive} />
        </div>
    );
};

export default MainPage;