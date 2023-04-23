import styles from "./InfoSection.module.scss";
import { classNames } from "~shared/lib/classNames/classNames";
import { StoryIcon } from "~shared/resources/icons/story/StoryIcon";
import { PlusIcon } from "~shared/resources/icons/plus/PlusIcon";
import { useAppDispatch } from "~store";
import { setAddTaskModalActive, setAllTasksModalActive } from "~app/reducers/modals-slice";

interface InfoSectionProps {
    className?: string;
}

export const InfoSection = ({ className }: InfoSectionProps) => {

    const dispatch = useAppDispatch();


    function OnClickOpenAllTaskModalHandler() {
        dispatch(setAllTasksModalActive(true));
    }

    function OnClickOpenAddTaskModalHandler() {
        dispatch(setAddTaskModalActive(true));
    }

    return (
        <div className={classNames(styles.InfoSection, {}, [className])}>
            <div className={styles.taskInfo}>
                <div className={styles.taskCount}>
                    0 Tasks today
                </div>
                <span className={styles.taskDescription}>
                    Set tasks and complete them
                </span>
            </div>

            <div className={styles.navButtons}>
                <div className={styles.storyIcon}
                     onClick={OnClickOpenAllTaskModalHandler}
                >
                    <StoryIcon />
                </div>

                <div className={styles.plusIcon}
                     onClick={OnClickOpenAddTaskModalHandler}
                >
                    <PlusIcon />
                </div>
            </div>
        </div>
    );
};