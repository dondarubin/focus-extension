import styles from "./NavMainPage.module.scss";
import { MainIcon } from "~shared/resources/icons/mainIcon/mainIcon";
import { SettingsIcon } from "~shared/resources/icons/settings/settings";
import React, { FC } from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { useAppDispatch, useAppSelector } from "~store";
import { TomatoStates } from "~app/reducers/tomato-slice";
import { TomatoStateInfo } from "~widgets/TomatoStateInfo/TomatoStateInfo";
import { setSettingsModalActive } from "~app/reducers/modals-slice";

interface NavMainPageProps {
    className?: string;
}

export const NavMainPage: FC<NavMainPageProps> = (props) => {
    const {
        className
    } = props;

    const tomatoState = useAppSelector(state => state.tomato.state);
    const dispatch = useAppDispatch();

    function OnClickOpenSettingsModalHandler() {
        dispatch(setSettingsModalActive(true))
    }

    return (
        <nav className={classNames(styles.NavMainPage, {}, [className])}>
            <Button className={styles.iconButtonMain}
                    theme={ThemeButton.CLEAR}>
                <MainIcon />
            </Button>
            {tomatoState === TomatoStates.OFF
                ? <>
                    <p className={classNames(styles.title, {}, [])}>walletadress.ada</p>
                    <div className={classNames(styles.iconButtonSettingsWrapper, {}, [])}>
                        <Button className={classNames(styles.iconButtonSettings, {}, [])}
                                onClick={OnClickOpenSettingsModalHandler}
                                theme={ThemeButton.CLEAR}>
                            <SettingsIcon />
                        </Button>
                    </div>
                </>
                : <>
                    <TomatoStateInfo />
                    <div className={classNames(styles.iconButtonSettingsWrapper, {}, [])}></div>
                </>
            }
        </nav>
    );
};