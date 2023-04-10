import React, { memo } from "react";
import { Theme } from "~app/providers/ThemeProvider/lib/ThemeContext";
import { useTheme } from "~app/providers/ThemeProvider/lib/useTheme";
import { Select } from "~shared/ui/Select/Select";
import { CustomSelect } from "~shared/ui/CustomSelect/CustomSelect";

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
        <CustomSelect
            initValue={theme}
            OnChange={OnClickSwitchTheme}
            className={className}
        >
            <div key={"blue"} value="blue" className={"selectOption"}>
                Blue
            </div>
            <div key={"orange"} value="orange" className={"selectOption"}>
                Orange
            </div>
            <div key={"purple"} className={"selectOption"}>
                Purple
            </div>
        </CustomSelect>
    );
});