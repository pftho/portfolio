import type { LinksFunction } from "@remix-run/node";
import NavBar, { links as NavBarLinks } from "~/components/NavBar";
import styles from "./styles.css";

export const links: LinksFunction = () => [
  ...NavBarLinks(),
  { rel: "stylesheet", href: styles },
];

const Header = () => (
  <header className="displayflex-row" id="header">
    <div></div>
    <NavBar />
  </header>
);

export default Header;
