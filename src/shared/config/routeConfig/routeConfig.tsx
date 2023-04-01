import type { RouteProps } from "react-router-dom";
import MainPage from "~pages/MainPage/MainPage";
import TasksPage from "~pages/TasksPage/TasksPage";
import SiteBlockerPage from "~pages/SiteBlockerPage/SiteBlockerPage";
import StatsPage from "~pages/StatsPage/StatsPage";

export enum AppRotes {
    MAIN = "main",
    TASKS = "tasks",
    BLOCKER = "blocker",
    STATS = "stats",
}

export const RoutePath: Record<AppRotes, string> = {
    [AppRotes.MAIN]: "/",
    [AppRotes.TASKS]: "/tasks",
    [AppRotes.BLOCKER]: "/blocker",
    [AppRotes.STATS]: "/stats"
};

export const routeConfig: Record<AppRotes, RouteProps> = {
    [AppRotes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRotes.TASKS]: {
        path: RoutePath.tasks,
        element: <TasksPage />
    },
    [AppRotes.BLOCKER]: {
        path: RoutePath.blocker,
        element: <SiteBlockerPage />
    },
    [AppRotes.STATS]: {
        path: RoutePath.stats,
        element: <StatsPage />
    }
};
