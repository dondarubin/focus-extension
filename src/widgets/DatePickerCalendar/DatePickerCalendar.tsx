import React, { FC, useEffect, useRef, useState } from "react";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { CalendarIcon } from "~shared/resources/icons/CalendarIcon";
import styles from "./DatePickerCalendar.module.scss";
import Calendar from "react-calendar";
import "./CustomCalendar.css";

type DatePickerCalendarProps = {}

export const DatePickerCalendar: FC<DatePickerCalendarProps> = (props) => {
    const {} = props;

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const documentRef = useRef(document);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        documentRef.current.addEventListener("click", handleClickOutside);

        return () => {
            documentRef.current.removeEventListener("click", handleClickOutside);
        };
    }, [dropdownRef, documentRef]);

    function OnClickCalendarButtonHandler() {
        toggleDropdown();
    }

    return (
        <div className={styles.DataPickerContainer}>
            <span>Today</span>
            <div ref={dropdownRef} className={styles.dropdownContainer}>
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