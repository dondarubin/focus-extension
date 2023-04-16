import styles from "./CalendarSection.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { LeftArrowIcon } from "~shared/resources/icons/arrow/LeftArrowIcon";
import { RightArrowIcon } from "~shared/resources/icons/arrow/RightArrowIcon";
import { Calendar } from "./Calendar/Calendar";

interface CalendarSectionProps {
    className?: string;
}

export const CalendarSection = ({ className }: CalendarSectionProps) => {
    return (
        <div className={classNames(styles.CalendarSection, {}, [className])}>
            <div className={styles.leftArrow}>
                <LeftArrowIcon />
            </div>

            <Calendar />

            <div className={styles.rightArrow}>
                <RightArrowIcon />
            </div>
        </div>
    );
};