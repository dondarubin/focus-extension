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


            <Button
                className={classNames("", {}, [className])}
                theme={ThemeButton.CLEAR}
            >
                <Link to={"/"}>
                    <TimerIcon />
                </Link>
            </Button>


            <Button
                className={classNames("", {}, [className])}
                theme={ThemeButton.CLEAR}
            >
                <Link to={"/tasks"}>
                    <TasksIcon />
                </Link>
            </Button>

            <Button
                className={classNames("", {}, [className])}
                theme={ThemeButton.CLEAR}
            >
                <Link to={"/blocker"}>
                    <BlockIcon />
                </Link>
            </Button>

            <Button
                className={classNames("", {}, [className])}
                theme={ThemeButton.CLEAR}
            >
                <Link to={"/stats"}>
                    <StatsIcon />
                </Link>
            </Button>
        </div>
    );
};