import { RoutePath } from "~shared/config/routeConfig/routeConfig";
import { useAppSelector } from "~store";

export function useInitialPage() {
    let savedPage = useAppSelector(state => state.router.currentPage);

    let initialPage;

    if (savedPage != null) {
        initialPage = RoutePath[savedPage];
        if (initialPage === undefined) {
            initialPage = RoutePath.main;
        }
    } else {
        initialPage = RoutePath.main;
    }
    return initialPage;
}