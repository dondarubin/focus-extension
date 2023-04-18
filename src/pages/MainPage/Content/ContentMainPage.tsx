import styles from "./ContentMainPage.module.scss";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import React, { Dispatch, FC, SetStateAction } from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import { AnimatedTimer } from "~widgets/AnimatedTimerLines/AnimatedTimer";
import { useAppDispatch, useAppSelector } from "~store";
import { setState, setStop, TomatoStates } from "~app/reducers/tomato-slice";
import { TimerControlButtons } from "~widgets/TimerControllButtons/TimerControlButtons";

interface ContentMainPageProps {
    className?: string;
    setChooseTaskModalActive?: Dispatch<SetStateAction<boolean>>;
}

export const ContentMainPage: FC<ContentMainPageProps> = (props) => {
    const {
        className,
        setChooseTaskModalActive
    } = props;

    const tomatoState = useAppSelector(state => state.tomato.state);

    function OnClickOpenChooseTaskModalHandler() {
        setChooseTaskModalActive((prev) => !prev);
    }

    return (
        <div className={classNames(styles.ContentMainPage, {}, [className])}>

            {
                tomatoState !== TomatoStates.OFF
                    ? <AnimatedTimer className={styles.animatedTimerContainer} />
                    : <div style={{ width: "440px", height: "45px" }}></div>
            }
            <p className={classNames(styles.clock)}>25:00</p>

            {tomatoState === TomatoStates.FOCUS
                ? <TimerControlButtons
                    className={styles.button}
                />
                : <Button
                    theme={ThemeButton.DEFAULT}
                    className={classNames(styles.button, {}, [])}
                    onClick={OnClickOpenChooseTaskModalHandler}
                >
                    Start
                </Button>
            }

        </div>
    );
};