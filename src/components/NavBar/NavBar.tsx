import "./navBar.scss";
import logo from "../../icons/logo.svg";
type navProps = {
    className?: string;
};
const NavBar = (props: navProps) => {
    return (
        <nav className="navBar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navLinks">
                <ul>
                    <li>
                        <a href="#">Help</a>
                    </li>
                    <li>
                        <a href="#">My trips</a>
                    </li>
                    <li id="signIn">
                        <a href="#">Sign Up</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default NavBar;
