import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./FooterButtons.module.scss";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { TimerIcon } from "~shared/resources/icons/timer/TimerIcon";
import { TasksIcon } from "~shared/resources/icons/tasks/TasksIcon";
import { BlockIcon } from "~shared/resources/icons/block/BlockIcon";
import { StatsIcon } from "~shared/resources/icons/stats/StatsIcon";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AppRotes, RoutePath } from "~shared/config/routeConfig/routeConfig";

interface FooterButtonsProps {
    className?: string;
}

export const FooterButtons = ({ className }: FooterButtonsProps) => {
    const [currentPage, setCurrentPage] = useState<string>(RoutePath.main);

    return (
        <div className={classNames(styles.FooterButtons, {}, [className])}>
            <Link to={RoutePath.main}>
                <Button
                    className={styles.footerButton}
                    theme={currentPage === RoutePath.main ? ThemeButton.DEFAULT : ThemeButton.CLEAR}
                    onClick={() => setCurrentPage(RoutePath.main)}
                >
                    <TimerIcon color={currentPage === RoutePath.main ? "var(--contrast-color)" : "#040404"} />
                </Button>
            </Link>

            <Link to={RoutePath.tasks}>
                <Button
                    className={styles.footerButton}
                    theme={currentPage === RoutePath.tasks ? ThemeButton.DEFAULT : ThemeButton.CLEAR}
                    onClick={() => setCurrentPage(RoutePath.tasks)}
                >
                    <TasksIcon color={currentPage === RoutePath.tasks ? "var(--contrast-color)" : "#040404"} />
                </Button>
            </Link>

            <Link to={RoutePath.blocker}>
                <Button
                    className={styles.footerButton}
                    theme={currentPage === RoutePath.blocker ? ThemeButton.DEFAULT : ThemeButton.CLEAR}
                    onClick={() => setCurrentPage(RoutePath.blocker)}
                >
                    <BlockIcon color={currentPage === RoutePath.blocker ? "var(--contrast-color)" : "#040404"} />
                </Button>
            </Link>

            <Link to={RoutePath.stats}>
                <Button
                    className={styles.footerButton}
                    theme={currentPage === RoutePath.stats ? ThemeButton.DEFAULT : ThemeButton.CLEAR}
                    onClick={() => setCurrentPage(RoutePath.stats)}
                >
                    <StatsIcon color={currentPage === RoutePath.stats ? "var(--contrast-color)" : "#040404"}/>
                </Button>
            </Link>
        </div>
    );
};