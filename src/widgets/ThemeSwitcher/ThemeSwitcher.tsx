import React, { memo } from "react";
import { Theme } from "~app/providers/ThemeProvider/lib/ThemeContext";
import { useTheme } from "~app/providers/ThemeProvider/lib/useTheme";
import { Select } from "~shared/ui/Select/Select";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    function OnClickToggleTheme(event) {
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
    };

    return (
        <Select
            theme={theme}
            OnClickToggleTheme={OnClickToggleTheme}
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
// <select
//     value={theme}
//     onChange={OnClickToggleTheme}
//     className={classNames(styles.ThemeSwitcher, {}, [])}
// >
//     <option key={"blue"} value="blue" className={"themeOption"}>
//         Blue
//     </option>
//     <option key={"orange"} value="orange" className={"themeOption"}>
//         Orange
//     </option>
//     <option key={"purple"} value="purple" className={"themeOption"}>
//         Purple
//     </option>
// </select>