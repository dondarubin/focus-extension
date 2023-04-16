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
        switch (selected) {
            case "Blue":
                toggleTheme(Theme.BLUE);
                break;
            case "Orange":
                toggleTheme(Theme.ORANGE);
                break;
            case "Coral":
                toggleTheme(Theme.CORAL);
                break;
            case "DarkBlue":
                toggleTheme(Theme.DARKBLUE);
                break;
            case "Peach":
                toggleTheme(Theme.PEACH);
                break;
            case "Aqua":
                toggleTheme(Theme.AQUA);
                break;
            case "Purple":
                toggleTheme(Theme.PURPLE);
                break;
            default: break;
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
                <ColorRect color={"#FF7F50"} />
                Coral
            </div>
            <div className={styles.themeOption}>
                <ColorRect color={"#5D6EA8"} />
                DarkBlue
            </div>
            <div className={styles.themeOption}>
                <ColorRect color={"#F5C5B8"} />
                Peach
            </div>
            <div className={styles.themeOption}>
                <ColorRect color={"#72BFCF"} />
                Aqua
            </div>
            <div className={styles.themeOption}>
                <ColorRect color={"#856BC2"} />
                Purple
            </div>
        </CustomSelect>
    );
});