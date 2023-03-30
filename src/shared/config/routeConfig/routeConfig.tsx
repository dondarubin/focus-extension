import type { RouteProps } from 'react-router-dom';
import MainPage from '~pages/MainPage/MainPage';

export enum AppRotes {
    MAIN = 'main',
}

export const RoutePath: Record<AppRotes, string> = {
    [AppRotes.MAIN]: '/',
};

export const routeConfig: Record<AppRotes, RouteProps> = {
    [AppRotes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
};
