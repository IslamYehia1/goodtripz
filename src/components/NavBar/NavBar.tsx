import "./navBar.scss";
import logo from "../../icons/logo.svg";
import menuIcon from "../../icons/menu.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
type navProps = {
    className?: string;
};
const NavBar = (props: navProps) => {
    return (
        <Router>
            <nav className="navBar">
                <div className="logo">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="navLinks">
                    <ul>
                        <li>
                            <Link to="/help">Help</Link>
                        </li>
                        <li>
                            <Link to="/mytrips">My trips</Link>
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
        </Router>
    );
};
export default NavBar;
