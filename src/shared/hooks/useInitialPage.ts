import LocalStorageKeys from "~app/storage/LocalStorageKeys";
import { RoutePath } from "~shared/config/routeConfig/routeConfig";
import { AppRotes } from "~app/reducers/router-slice";

export function useInitialPage() {
    // TODO: Refactor this shit or replace with redux useAppState
    let initialPage = localStorage.getItem(LocalStorageKeys.INITIAL_PAGE) || RoutePath.main;

    function isAppRoute(path: string): path is AppRotes {
        return Object.values(AppRotes).includes(path as AppRotes);
    }

    if (initialPage !== null && isAppRoute(initialPage)) {
        initialPage = RoutePath[initialPage];
        if (initialPage === undefined) {
            initialPage = RoutePath.main;
        }
    } else {
        initialPage = RoutePath.main;
    }
    return initialPage;
}