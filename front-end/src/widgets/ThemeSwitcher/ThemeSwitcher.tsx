import { useTheme, Theme } from "../../app/providers/ThemeProvider";
import { classNames } from "../../shared/lib/classNames/classNames"
import Button, { ThemeButton } from "../../shared/ui/Button/Button"
import DarkIcon from "../../assets/icons/icon-moon.svg"
import "./ThemeSwitcher.scss"

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = ({ className = "" }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames("ThemeSwitcher", {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? (
                <img src={DarkIcon} alt="Dark Icon" width="32px" />
            ) : (
                <img src={DarkIcon} alt="Light Icon" width="32px"/>
            )}
        </Button>
    );
};
export default ThemeSwitcher