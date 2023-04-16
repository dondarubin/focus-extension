import styles from "./Calendar.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";

interface CalendarProps {
    className?: string;
}

export const Calendar = ({ className }: CalendarProps) => {
    return (
        <div className={classNames(styles.Calendar, {}, [className])}>
            Calendar
        </div>
    );
};