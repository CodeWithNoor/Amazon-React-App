import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "../css/Header.css";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="header-logo" src={logo} alt="Amazon Logo" />

      <div className="header-search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_SearchIcon" />
      </div>

      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">Hello Guest</span>
          <span className="header-optionLineTwo"> Sign In</span>
        </div>

        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTwo">& Orders</span>
        </div>

        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>

        <div className="header-ShoppingBasketIcon">
          <ShoppingBasketIcon className="Basket" />
          <span className="header-optionLineTwo header-BasketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
