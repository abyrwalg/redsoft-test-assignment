import classes from "./Header.module.css";
import logo from "../../assets/images/icons/logo.png";
import darkLogo from "../../assets/images/icons/logo-dark.png";

import SearchBar from "../SearchBar/SearchBar";
import Address from "../Address/Address";

function Header(props) {
  let style = {};
  const classesString = [classes.Header];

  if (props.position) {
    if (props.position === "bottom") {
      classesString.push(classes.bottom);
    }
  }

  return (
    <nav className={classesString.join(" ")} style={style}>
      <div className={classes.container}>
        <a href="index.html">
          <img
            className={classes.logo}
            src={props.position === "bottom" ? darkLogo : logo}
            alt="Logo"
          />
        </a>
        <ul className={classes.navList}>
          <li>
            <a href="#">Каталог</a>
          </li>
          <li>
            <a href="#">Доставка</a>
          </li>
          <li>
            <a href="#">Оплата</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
          <li>
            <a href="#">О галерее</a>
          </li>
        </ul>
        {props.position === "bottom" ? (
          <Address />
        ) : (
          <SearchBar placeholder="Поиск по названию картины" />
        )}
      </div>
    </nav>
  );
}

export default Header;
