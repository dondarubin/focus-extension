export function useShowWelcome(): string | null {
    let showWelcome = localStorage.getItem("SHOW_WELCOME");
    if (!showWelcome) {
        localStorage.setItem("SHOW_WELCOME", "");
    }
    return showWelcome;
}