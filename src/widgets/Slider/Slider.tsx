import styles from "./Slider.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import type { FC } from "react";
import React, { useState } from "react";
import { FirstSliderIcon } from "~shared/resources/icons/people/slider/FirstSliderIcon";
import { SecondSliderIcon } from "~shared/resources/icons/people/slider/SecondSliderIcon";
import { ThirdSliderIcon } from "~shared/resources/icons/people/slider/ThirdSliderIcon";
import { FourthSliderIcon } from "~shared/resources/icons/people/slider/FourthSliderIcon";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { useAppDispatch } from "~store";
import { ModalsNames, setModalActive } from "~app/reducers/modals-slice";

interface SliderProps {
    className?: string;
}

const SliderItems = [
    <FirstSliderIcon primaryColor={"var(--primary-color)"} />,
    <SecondSliderIcon primaryColor={"var(--primary-color)"} />,
    <ThirdSliderIcon primaryColor={"var(--primary-color)"} />,
    <FourthSliderIcon primaryColor={"var(--primary-color)"} />
];

export const Slider: FC<SliderProps> = (props) => {
    const {
        className
    } = props;

    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [currentItem, setCurrentItem] = useState(SliderItems[currentItemIndex]);
    const dispatch = useAppDispatch();


    function OnClickSwitchSliderImageHandler() {
        setCurrentItem(SliderItems[currentItemIndex + 1]);
        setCurrentItemIndex(currentItemIndex + 1);
    }

    function OnClickCloseWelcomeModalHandler() {
        dispatch(setModalActive({
            ModalName: ModalsNames.WELCOME,
            active: false
        }));
    }


    return (
        <div className={classNames(styles.Slider, {}, [className])}>
            <div className={styles.sliderItemWrapper}>
                {currentItem}
            </div>

            <div className={styles.footerWrapper}>
                <div className={styles.dotsWrapper}>
                    <div className={styles.dots}>
                        <div className={classNames(styles.dot, {}, [
                            currentItemIndex === 0 ? styles.active : ""
                        ])}>
                        </div>

                        <div className={classNames(styles.dot, {}, [
                            currentItemIndex === 1 ? styles.active : ""
                        ])}>
                        </div>

                        <div className={classNames(styles.dot, {}, [
                            currentItemIndex === 2 ? styles.active : ""
                        ])}>
                        </div>

                        <div className={classNames(styles.dot, {}, [
                            currentItemIndex === 3 ? styles.active : ""
                        ])}>
                        </div>
                    </div>
                </div>

                {currentItemIndex === SliderItems.length - 1 ?
                    <Button className={styles.nextButton}
                            theme={ThemeButton.DEFAULT}
                            OnClick={OnClickCloseWelcomeModalHandler}
                    >
                        Let’s go!
                    </Button>
                    :
                    <Button className={styles.nextButton}
                            theme={ThemeButton.DEFAULT}
                            OnClick={OnClickSwitchSliderImageHandler}
                    >
                        Next
                    </Button>
                }
            </div>
        </div>
    );
};