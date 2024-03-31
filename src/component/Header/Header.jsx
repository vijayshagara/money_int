import React from "react";
import "./Header.css";
import hand from "../../assets/hand.png"

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand"><strong>Hello Shahrukh <img className="hand_img" src={hand} alt="" />,</strong></a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </nav>
    </div>
  );
};

export default Header;
