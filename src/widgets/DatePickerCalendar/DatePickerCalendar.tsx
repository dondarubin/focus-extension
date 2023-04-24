import React, { FC, useEffect, useRef, useState } from "react";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { CalendarIcon } from "~shared/resources/icons/CalendarIcon";
import styles from "./DatePickerCalendar.module.scss";
import Calendar from "react-calendar";
import "./CustomCalendar.css";
import { useOverlay } from "~shared/hooks/useOverlay";

type DatePickerCalendarProps = {}

export const DatePickerCalendar: FC<DatePickerCalendarProps> = (props) => {
    const {} = props;

    const dropdownRef = useRef(null);
    const { isOpen, setIsOpen } = useOverlay(false, dropdownRef);

    const toggleDropdownCalendar = () => {
        setIsOpen(!isOpen);
    };

    function OnClickCalendarButtonHandler() {
        toggleDropdownCalendar();
    }

    return (
        <div ref={dropdownRef} className={styles.DataPickerContainer}>
            <span>Today</span>
            <div className={styles.dropdownContainer}>
                <Button theme={ThemeButton.CLEAR} onClick={OnClickCalendarButtonHandler}>
                    <CalendarIcon color={"var(--secondary-color)"} />
                </Button>
                {
                    isOpen
                        ? <div className={styles.dropDownCalendar}>
                            <Calendar
                                defaultValue={new Date()}
                            ></Calendar>
                        </div>
                        : <></>
                }
            </div>
        </div>
    );
};