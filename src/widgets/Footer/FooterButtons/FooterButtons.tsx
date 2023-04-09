import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./FooterButtons.module.scss";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { TimerIcon } from "~shared/resources/icons/timer/TimerIcon";
import { TasksIcon } from "~shared/resources/icons/tasks/TasksIcon";
import { BlockIcon } from "~shared/resources/icons/block/BlockIcon";
import { StatsIcon } from "~shared/resources/icons/stats/StatsIcon";
import { Link } from "react-router-dom";

interface FooterButtonsProps {
    className?: string;
}

export const FooterButtons = ({ className }: FooterButtonsProps) => {
    return (
        <div className={classNames(styles.FooterButtons, {}, [className])}>
            <Link to={"/"}>
                <Button
                    className={classNames(styles.footerButton, {}, [className])}
                    theme={ThemeButton.CLEAR}
                >
                    <TimerIcon />
                </Button>
            </Link>

            <Link to={"/tasks"}>
                <Button
                    className={classNames(styles.footerButton, {}, [className])}
                    theme={ThemeButton.CLEAR}
                >
                    <TasksIcon />
                </Button>
            </Link>

            <Link to={"/blocker"}>
                <Button
                    className={classNames(styles.footerButton, {}, [className])}
                    theme={ThemeButton.CLEAR}
                >
                    {/*<BlockIcon />*/}
                </Button>
            </Link>

            <Link to={"/stats"}>
                <Button
                    className={classNames(styles.footerButton, {}, [className])}
                    theme={ThemeButton.CLEAR}
                >
                    {/*<StatsIcon />*/}
                </Button>
            </Link>
        </div>
    );
};