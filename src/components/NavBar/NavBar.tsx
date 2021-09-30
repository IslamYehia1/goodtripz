import "./navBar.scss";
import { ReactComponent as Logo } from "../../icons/logo.svg";
import { ReactComponent as MenuIcon } from "../../icons/menu.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
type navProps = {
    className?: string;
};
const NavBar = (props: navProps) => {
    return (
        <Router>
            <nav className="navBar">
                <div className="logo">
                    <Link to="/">
                        <Logo className="logo" />
                    </Link>
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
                            <a href="#">Sign In</a>
                        </li>
                        <li>
                            <MenuIcon className="menuIcon" />
                        </li>
                    </ul>
                </div>
            </nav>
        </Router>
    );
};
export default NavBar;
