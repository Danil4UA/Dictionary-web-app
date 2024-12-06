import { Theme } from "../../../app/providers/ThemeProvider";
import { classNames } from "../../lib/classNames/classNames"
import { FC, ButtonHTMLAttributes } from "react"


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
        theme = Theme.LIGHT,
        onClick,
    } = props

    return (
        <button 
            className={classNames("Button", {}, [theme])}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button