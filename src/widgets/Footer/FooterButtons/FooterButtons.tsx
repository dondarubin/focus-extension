import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./FooterButtons.module.scss";
import { Button, ThemeButton } from "~shared/ui/Button/Button";
import { TimerIcon } from "~shared/resources/icons/timer/TimerIcon";
import { TasksIcon } from "~shared/resources/icons/tasks/TasksIcon";
import { BlockIcon } from "~shared/resources/icons/block/BlockIcon";
import { StatsIcon } from "~shared/resources/icons/stats/StatsIcon";
import { Link } from "react-router-dom";
import { RoutePath } from "~shared/config/routeConfig/routeConfig";
import { useAppDispatch, useAppSelector } from "~store";
import { AppRotes, setCurrentPage } from "~app/reducers/router-slice";
import { setIsScrolled } from "~app/reducers/statsPageScroll-slice";

interface FooterButtonsProps {
    className?: string;
}

export const FooterButtons = ({ className }: FooterButtonsProps) => {
    const dispatch = useAppDispatch();
    const currentPage = useAppSelector(state => state.router.currentPage);

    const _setCurrentPage = (page: AppRotes) => {
        dispatch(setIsScrolled(false));
        dispatch(setCurrentPage(page));
    };

    return (
        <div className={classNames(styles.FooterButtons, {}, [className])}>
            <Link to={RoutePath.main}>
                <Button
                    className={styles.footerButton}
                    theme={currentPage === AppRotes.MAIN ? ThemeButton.DEFAULT : ThemeButton.CLEAR}
                    onClick={() => _setCurrentPage(AppRotes.MAIN)}
                >
                    <TimerIcon color={currentPage === AppRotes.MAIN ? "var(--contrast-color)" : "#040404"} />
                </Button>
            </Link>

            <Link to={RoutePath.tasks}>
                <Button
                    className={styles.footerButton}
                    theme={currentPage === AppRotes.TASKS ? ThemeButton.DEFAULT : ThemeButton.CLEAR}
                    onClick={() => _setCurrentPage(AppRotes.TASKS)}
                >
                    <TasksIcon color={currentPage === AppRotes.TASKS ? "var(--contrast-color)" : "#040404"} />
                </Button>
            </Link>

            <Link to={RoutePath.blocker}>
                <Button
                    className={styles.footerButton}
                    theme={currentPage === AppRotes.BLOCKER ? ThemeButton.DEFAULT : ThemeButton.CLEAR}
                    onClick={() => _setCurrentPage(AppRotes.BLOCKER)}
                >
                    <BlockIcon color={currentPage === AppRotes.BLOCKER ? "var(--contrast-color)" : "#040404"} />
                </Button>
            </Link>

            <Link to={RoutePath.stats}>
                <Button
                    className={styles.footerButton}
                    theme={currentPage === AppRotes.STATS ? ThemeButton.DEFAULT : ThemeButton.CLEAR}
                    onClick={() => _setCurrentPage(AppRotes.STATS)}
                >
                    <StatsIcon color={currentPage === AppRotes.STATS ? "var(--contrast-color)" : "#040404"} />
                </Button>
            </Link>
        </div>
    );
};