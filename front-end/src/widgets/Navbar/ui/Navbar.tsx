import ThemeSwitcher from "../../ThemeSwitcher/ThemeSwitcher";
import FontSwitcher from "../../FontSwitcher/FontSwitcher";
import Logo from "../../../assets/icons/logo.svg"
import "./Navbar.scss"

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src={Logo} alt="logo" />
            </div>
            <div style={{display: "flex", alignItems:"center", gap:"20px"}}>
                <FontSwitcher />
                <ThemeSwitcher />
            </div>
        </nav>
    )
};

export default Navbar