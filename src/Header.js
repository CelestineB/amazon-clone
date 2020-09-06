import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      {/*logo on the left*/}
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header__logo"
        />
      </Link>

      {/*Search box*/}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      {/*three links*/}
      <div className="header__nav">
        <Link className="header__link" to={!user ? "/login" : ""}>
          <div className="header__option" onClick={login}>
            <span className="header__optionLineOne">
              Hello
              <strong>{user ? user.email : ""}</strong>
            </span>
            <span className="header__optionLineTwo">
              {!user ? "SignIn" : "Signout"}
            </span>
          </div>
        </Link>
        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link className="header__link" to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="header__optionLineTwo" />
            <span className="header__basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
      {/*Basket icon*/}
    </nav>
  );
}

export default Header;
