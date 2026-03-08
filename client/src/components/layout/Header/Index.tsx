import Logo from "../../common/Logo";
import NavList from "./NavList";
import UserOptions from "./UserOptions";

/**
 * The main application header.
 * Contains the site logo, navigation links, and user options (cart and login).
 */
export default function Header() {
  return (
    <header>
      <nav className="flex flex-row justify-around items-center bg-black w-full p-4">
        <Logo />
        <NavList />
        <UserOptions />
      </nav>
      <hr className="w-full bg-gray-500 border-0 h-px" />
    </header>
  );
}
