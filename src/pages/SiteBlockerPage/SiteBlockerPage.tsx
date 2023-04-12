import React from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./SiteBlocker.module.scss";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { MarkIcon } from "~shared/resources/icons/MarkIcon";

const SiteBlockerPage = () => {
    return (
        <div className={classNames(styles.layout)}>
            <div className={classNames(styles.title)}>
                Website Blocker
            </div>
            <div className={classNames(styles.titleDescription)}>
                Block sites that interfere with your productivity
            </div>
            <div className={classNames(styles.addressContainer)}>
                <input type={"text"} value={"Add address"}></input>
                <Button
                    className={classNames(styles.addingButton)}
                    theme={ThemeButton.DEFAULT}>
                    <MarkIcon color={"var(--contrast-color)"} />
                </Button>
            </div>
            <Button
                className={classNames(styles.blockAll)}
                theme={ThemeButton.CLEAR}
            >
                Block all
            </Button>
        </div>
    );
};

export default SiteBlockerPage;