import styles from "./NavTaskPage.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { InfoSection } from "~pages/TasksPage/Nav/InfoSection/InfoSection";

interface NavTaskPageProps {
    className?: string;
}

export const NavTaskPage = ({ className }: NavTaskPageProps) => {
    return (
        <nav className={classNames(styles.NavTaskPage, {}, [className])}>
            <InfoSection />
        </nav>
    );
};