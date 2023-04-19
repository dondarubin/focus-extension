import styles from "./WelcomeSlider.module.scss";
import { FirstSliderIcon } from "~shared/resources/icons/people/slider/FirstSliderIcon";
import { SecondSliderIcon } from "~shared/resources/icons/people/slider/SecondSliderIcon";
import { ThirdSliderIcon } from "~shared/resources/icons/people/slider/ThirdSliderIcon";
import { FourthSliderIcon } from "~shared/resources/icons/people/slider/FourthSliderIcon";
import { classNames } from "~shared/lib/classNames/classNames";

interface WelcomeSliderProps {
    className?: string;
}

export const WelcomeSlider = ({ className }: WelcomeSliderProps) => {
    return (
        <div className={classNames(styles.WelcomeSlider, {}, [className])}>
            <FirstSliderIcon primaryColor={"var(--primary-color)"} />

            <SecondSliderIcon primaryColor={"var(--primary-color)"} />

            <ThirdSliderIcon primaryColor={"var(--primary-color)"} />

            <FourthSliderIcon primaryColor={"var(--primary-color)"} />
        </div>
    );
};