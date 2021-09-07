import "./navBar.scss";
import logo from "../../icons/logo.svg";
import menuIcon from "../../icons/menu.svg";
type navProps = {
    className?: string;
};
const NavBar = (props: navProps) => {
    return (
        <nav className="navBar">
            <div className="logo">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="navLinks">
                <ul>
                    <li>
                        <a href="#">Help</a>
                    </li>
                    <li>
                        <a href="#">My trips</a>
                    </li>
                    <li className="signIn">
                        <a href="#">Sign Up</a>
                    </li>
                    <li>
                        <img
                            src={menuIcon}
                            alt="menu icon"
                            className="menuIcon"
                        />
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default NavBar;
