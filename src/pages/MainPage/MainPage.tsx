import React, { useState } from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./MainPage.module.scss";
import { NavMainPage } from "~pages/MainPage/Nav/NavMainPage";
import { ContentMainPage } from "~pages/MainPage/Content/ContentMainPage";
import { SettingsModal } from "~widgets/SettingsModal/SettingsModal";
import { ChooseTaskModal } from "~widgets/ChooseTaskModal/ChooseTaskModal";
import { GuideModal } from "~widgets/GuideModal/GuideModal";

const MainPage = () => {
    const [settingsModalActive, setSettingsModalActive] = useState(false);
    const [chooseTaskModalActive, setChooseTaskModalActive] = useState(false);
    const [guideModalActive, setGuideModalActive] = useState(false);


    return (
        <div className={styles.MainPage}>
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