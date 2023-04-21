import React, { FC } from "react";
import styles from "./HorizontalCalendar.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { LeftArrowIcon } from "~shared/resources/icons/arrow/LeftArrowIcon";
import { RightArrowIcon } from "~shared/resources/icons/arrow/RightArrowIcon";

type VerticalCalendarProps = {
    className?: string
}

export const HorizontalCalendar: FC<VerticalCalendarProps> = (props) => {
    const {
        className
    } = props;

    const formatNumber = (num) => (num < 10 ? "0" + num.toString() : num.toString());

    const buttonDates = Array.from({ length: 7 }, (_, i) => {
        let additionalClass: string;

        //temp
        switch (i) {
            case 1:
                additionalClass = styles.dateButtonWithTasks;
                break;
            case 3:
                additionalClass = styles.dateButtonSelected;
                break;
        }
        //temp
        //TODO: Create dates validator
        return (
            <Button
                key={i}
                className={classNames(styles.dateButton, {}, [additionalClass])}
                theme={ThemeButton.CLEAR}>
                <p>Mon</p>
                <p>{formatNumber(i + 1)}</p
                >
            </Button>
        );
    });

    return (
        <div className={classNames(styles.wrapper, {}, [className])}>
            <div className={styles.leftArrow}>
                <LeftArrowIcon />
            </div>
            {buttonDates}
            <div className={styles.rightArrow}>
                <RightArrowIcon />
            </div>
        </div>
    );
};