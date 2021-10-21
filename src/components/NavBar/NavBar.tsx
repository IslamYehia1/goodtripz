import style from "./NavBar.module.scss";
import { Logo } from "../Icons";
import { MenuIcon } from "../Icons";
import Link from "next/link";
import { propsType } from "./types";
import { useRouter } from "next/router";
const NavBar = ({ className }: propsType) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <nav
      className={`${style.navBar} ${router.pathname === "/" ? style.home : ""}`}
    >
      <div className={style.logo}>
        <Link passHref href="/">
          <Logo className={style.logo} />
        </Link>
      </div>
      <div className={style.navLinks}>
        <ul>
          <li>
            <Link href="/help">Help</Link>
          </li>
          <li>
            <Link href="/mytrips">My trips</Link>
          </li>
          <li className={style.signIn}>
            <a href="#">Sign In</a>
          </li>
          <li>
            <MenuIcon className={style.menuIcon} />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
