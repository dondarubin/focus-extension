import React, { memo } from "react";
import { Theme } from "~app/providers/ThemeProvider/lib/ThemeContext";
import { useTheme } from "~app/providers/ThemeProvider/lib/useTheme";
import { Select } from "~shared/ui/Select/Select";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    function OnClickSwitchTheme(event) {
        if (event.target.value === "blue") {
            toggleTheme(Theme.BLUE);
            return;
        }
        if (event.target.value === "orange") {
            toggleTheme(Theme.ORANGE);
            return;
        }
        if (event.target.value === "purple") {
            toggleTheme(Theme.PURPLE);
            return;
        }
    }

    return (
        <Select
            theme={theme}
            OnChange={OnClickSwitchTheme}
            className={className}
        >
            <option key={"blue"} value="blue" className={"selectOption"}>
                Blue
            </option>
            <option key={"orange"} value="orange" className={"selectOption"}>
                Orange
            </option>
            <option key={"purple"} value="purple" className={"selectOption"}>
                Purple
            </option>
        </Select>
    );
});