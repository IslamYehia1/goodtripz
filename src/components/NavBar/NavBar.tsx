import style from "./NavBar.module.scss";
import { Logo } from "../Icons";
import { MenuIcon } from "../Icons";
import Link from "next/link";
import { propsType } from "./types";
import { useRouter } from "next/router";
const NavBar = ({ className }: propsType) => {
  const router = useRouter();
  return (
    <nav className={`${style.navBar} ${router.pathname === "/" ? style.home : ""}`}>
      <div className={style.logo}>
        <Link passHref href="/">
          <a>
            <Logo className={style.logo} />
          </a>
        </Link>
      </div>
      <div className={style.navLinks}>
        <Link href="/help">
          <a className={style.link}>Help</a>
        </Link>

        <Link href="/mytrips">
          <a className={style.link}>My trips</a>
        </Link>
        <Link href="/mytrips">
          <span className={`${style.link} ${style.signIn}`}>
            <a href="#">Sign In</a>
          </span>
        </Link>

        <MenuIcon className={style.menuIcon} />
      </div>
    </nav>
  );
};
export default NavBar;
