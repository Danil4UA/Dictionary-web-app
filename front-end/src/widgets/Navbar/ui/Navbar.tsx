import ThemeSwitcher from "../../ThemeSwitcher/ThemeSwitcher";
import FontSwitcher from "../../FontSwitcher/FontSwitcher";
import "./Navbar.scss"

const Navbar = () => {
    return (
        <nav>
            <FontSwitcher />
            <ThemeSwitcher />
        </nav>
    )
};

export default Navbar