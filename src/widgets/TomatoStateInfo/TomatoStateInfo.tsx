import React, { FC, useState } from "react";
import styles from "./TomatoStateInfo.module.scss";
import { useAppSelector } from "~store";
import Marquee from "react-fast-marquee";
import { classNames } from "~shared/lib/classNames/classNames";
import { SessionsDotsIndicator } from "~widgets/SessionsDontsIndicator/SessionsDotsIndicator";
import { TomatoStates } from "~app/reducers/tomato-slice";

type TomatoStateInfoProps = {}

export const TomatoStateInfo: FC<TomatoStateInfoProps> = (props) => {
    const {} = props;

    const currentTomatoState = useAppSelector(state => state.tomato.state);
    const currentTaskName = useAppSelector(state => state.tomato.currentTaskName);

    const [isRunning, setIsRunning] = useState(false);

    const startMarquee = () => {
        setIsRunning(true);
    };

    const stopMarquee = () => {
        setIsRunning(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.tomatoStateName}>
                {currentTomatoState.toUpperCase()}
            </div>
            {currentTomatoState === TomatoStates.FOCUS
                &&
              <div
                style={{ height: "21px", width: "221px" }}
                onMouseEnter={startMarquee}
                onMouseLeave={stopMarquee}
              >
                  {
                      isRunning
                          ? <Marquee
                              className={styles.taskName}
                              speed={50}
                              gradient={false}
                          >
                              <p>{currentTaskName}</p>
                          </Marquee>

                          : <p className={classNames(styles.taskName, {}, [styles.taskNameStatic])}>
                              {currentTaskName}
                          </p>
                  }
              </div>
            }
            
            <SessionsDotsIndicator className={styles.dotsIndicator} />
        </div>
    );
};
