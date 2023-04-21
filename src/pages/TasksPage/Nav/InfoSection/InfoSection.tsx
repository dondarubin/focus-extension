import styles from "./InfoSection.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { StoryIcon } from "~shared/resources/icons/story/StoryIcon";
import { PlusIcon } from "~shared/resources/icons/plus/PlusIcon";

interface InfoSectionProps {
    className?: string;
}

export const InfoSection = ({ className }: InfoSectionProps) => {
    return (
        <div className={classNames(styles.InfoSection, {}, [className])}>
            <div className={styles.taskInfo}>
                <div className={styles.taskCount}>
                    April 22
                </div>
                <span className={styles.taskDescription}>
                    Set tasks and complete them
                </span>
            </div>

            <div className={styles.navButtons}>
                <div className={styles.storyIcon}>
                    <StoryIcon />
                </div>
                <div className={styles.plusIcon}>
                    <PlusIcon />
                </div>
            </div>
        </div>
    );
};