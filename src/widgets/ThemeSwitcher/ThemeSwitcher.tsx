import React, { memo } from "react";
import { Theme } from "~app/providers/ThemeProvider/lib/ThemeContext";
import { useTheme } from "~app/providers/ThemeProvider/lib/useTheme";
import { CustomSelect } from "~shared/ui/CustomSelect/CustomSelect";
import { ColorRect } from "~shared/ui/ColorRect/ColorRect";
import styles from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    function OnClickSwitchTheme(selected) {
        if (selected === "Blue") {
            toggleTheme(Theme.BLUE);
            return;
        }
        if (selected === "Orange") {
            toggleTheme(Theme.ORANGE);
            return;
        }
        if (selected === "Purple") {
            toggleTheme(Theme.PURPLE);
            return;
        }
    }

    return (
        <CustomSelect
            initValue={theme}
            OnChange={OnClickSwitchTheme}
        >
            <div className={styles.themeOption}>
                <ColorRect color={"#9FB4F6"} />
                Blue
            </div>
            <div className={styles.themeOption}>
                <ColorRect color={"#F6BF62"} />
                Orange
            </div>
            <div className={styles.themeOption}>
                <ColorRect color={"#856BC2"} />
                Purple
            </div>
        </CustomSelect>
    );
});