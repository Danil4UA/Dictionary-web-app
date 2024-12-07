import { classNames } from "../../lib/classNames/classNames"
import { FC, ButtonHTMLAttributes } from "react"
import "./Button.scss"

export const enum ThemeButton {
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    onClick?: ()=> void;
}


const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className = "",
        theme = ThemeButton.CLEAR, // Default value matches ThemeButton type
        onClick,
        ...otherProps // Spread to pass down any additional button props
    } = props;

    return (
        <button 
            className={classNames("Button", {}, [className, theme])} // Include className if provided
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button