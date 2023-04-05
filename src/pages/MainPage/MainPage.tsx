import React from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./MainPage.module.scss";
import { NavMainPage } from "~pages/MainPage/Nav/NavMainPage";
import { ContentMainPage } from "~pages/MainPage/Content/ContentMainPage";

const MainPage = () => {
    return (
        <div className={classNames(styles.MainPage, {}, [])}>
            <NavMainPage />
            <ContentMainPage />
        </div>
    );
};

export default MainPage;