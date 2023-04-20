import styles from "./NavTaskPage.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { InfoSection } from "~pages/TasksPage/Nav/InfoSection/InfoSection";
import { CalendarSection } from "~pages/TasksPage/Nav/CalendarSection/CalendarSection";
import { VerticalCalendar } from "~widgets/VerticalСalendar/VerticalCalendar";

interface NavTaskPageProps {
    className?: string;
}

export const NavTaskPage = ({ className }: NavTaskPageProps) => {
    return (
        <nav className={classNames(styles.NavTaskPage, {}, [className])}>
            <InfoSection />
            <VerticalCalendar />
        </nav>
    );
};