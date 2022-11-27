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
        <Link className={style.logo} passHref href="/">
          <Logo />
        </Link>
      </div>
      <div className={style.navLinks}>
        <Link className={style.link} href="/help">
          Help
        </Link>

        <Link className={style.link} href="/mytrips">
          My trips
        </Link>
        <Link href="/mytrips">
          <span className={`${style.link} ${style.signIn}`}>Sign In</span>
        </Link>
      </div>
      <MenuIcon className={style.menuIcon} />
    </nav>
  );
};
export default NavBar;
