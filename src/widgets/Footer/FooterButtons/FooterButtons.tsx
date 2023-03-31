import { classNames } from "~shared/lib/classNames/classNames";
import styles from "./FooterButtons.module.scss";
import { Button, ThemeButton } from "~shared/ui/Button/Button";

// import Test from "../../../shared/resources/icons/test.png";

interface FooterButtonsProps {
    className?: string;
}

export const FooterButtons = ({ className }: FooterButtonsProps) => {
    return (
        <div className={classNames(styles.FooterButtons, {}, [className])}>
            <Button
                className={classNames("", {}, [className])}
                theme={ThemeButton.CLEAR}
            >
                {/*<Test/>*/}
                timer
            </Button>

            <Button
                className={classNames("", {}, [className])}
                theme={ThemeButton.CLEAR}
            >
                tasks
            </Button>

            <Button
                className={classNames("", {}, [className])}
                theme={ThemeButton.CLEAR}
            >
                block
            </Button>

            <Button
                className={classNames("", {}, [className])}
                theme={ThemeButton.CLEAR}
            >
                tracker
            </Button>
        </div>
    );
};