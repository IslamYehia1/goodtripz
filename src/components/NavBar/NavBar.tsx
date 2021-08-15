import "./navBar.scss";
type navProps = {
    className: string;
};
const NavBar = (props: navProps) => {
    return (
        <nav className={props.className}>
            <ul>
                <li>Home</li>
                <li>my trips</li>
                <li>anything </li>
            </ul>
        </nav>
    );
};
export default NavBar;
