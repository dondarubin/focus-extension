import styles from "./ContentMainPage.module.scss";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import React, { FC } from "react";
import { classNames } from "~shared/lib/classNames/classNames";
import { AnimatedTimer } from "~widgets/AnimatedTimerLines/AnimatedTimer";
import { useAppDispatch, useAppSelector } from "~store";
import { setState, TomatoStates } from "~app/reducers/tomato-slice";
import { TimerControlButtons } from "~widgets/TimerControllButtons/TimerControlButtons";
import { ModalsNames, setModalActive } from "~app/reducers/modals-slice";

interface ContentMainPageProps {
    className?: string;
}

export const ContentMainPage: FC<ContentMainPageProps> = (props) => {
    const {
        className
    } = props;

    const tomatoState = useAppSelector(state => state.tomato.state);
    const dispatch = useAppDispatch();

    function OnClickOpenTimerEndModalHandler() {
        dispatch(setModalActive({
            ModalName: ModalsNames.TIMER_END,
            active: true
        }));
    }

    function OnClickOpenChooseTaskModalHandler() {
        dispatch(setModalActive({
            ModalName: ModalsNames.CHOOSE_TASK,
            active: true
        }));
    }

    function skipButtonHandler() {
        dispatch(setState(TomatoStates.OFF));
    }

    const _startButton = () => {
        return (
            <Button
                theme={ThemeButton.DEFAULT}
                className={classNames(styles.button, {}, [])}
                onClick={OnClickOpenChooseTaskModalHandler}
            >
                Start
            </Button>
        );
    };

    const _skipButton = () => {
        return (
            <Button
                theme={ThemeButton.DEFAULT}
                className={classNames(styles.button, {}, [])}
                onClick={skipButtonHandler}
            >
                Skip
            </Button>
        );
    };

    return (
        <div className={classNames(styles.ContentMainPage, {}, [className])}>
            {
                tomatoState !== TomatoStates.OFF
                    ? <AnimatedTimer className={styles.animatedTimerContainer} />
                    : <div className={styles.animatedTimerContainer}></div>
            }

            <p className={classNames(styles.clock)}>25:00</p>

            {tomatoState === TomatoStates.FOCUS
                ? <TimerControlButtons
                    className={styles.button}
                />
                : [TomatoStates.SHORT_BREAK, TomatoStates.LONG_BREAK]
                    .includes(tomatoState) ? _skipButton() : _startButton()
            }
        </div>
    );
};