import { Nav, NavLink, NavMenu } from "./NavbarElements";
import "./Navbar.css";
import React, { useState, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonIcon from "@material-ui/icons/Person";
import Badge from "@material-ui/core/Badge";
import { connect } from "react-redux";
import NavbarBurger from "./NavbarBurger";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <>
      <Nav className=".ellfOQ, hallo">
        <NavbarBurger className="hamburger" />
        <NavLink className="link" to="/">
          <p className="logo" id="logo">
            JustALogo
          </p>
        </NavLink>
        <NavMenu className="NavbarItems">
          <NavLink className="link" to="/Aboutpage">
            About
          </NavLink>
          <NavLink className="link" to="/Product">
            Products
          </NavLink>
          <NavLink className="link" to="/Contactpage">
            Contact
          </NavLink>
          <div style={{ display: "block", padding: 30 }}></div>
        </NavMenu>
        <div className="NavbarItems">
          <NavLink className="" to={"/Dashboard"}>
            <SearchIcon className="navbaricons" />
          </NavLink>
          <NavLink className="" to={"/Dashboard"}>
            <PersonIcon className="navbaricons" />
          </NavLink>
          <div className="navbaricons">
            <NavLink className="" id="icon" to="/Cart">
              <ShoppingCartOutlinedIcon className="navbaricons" />
              <Badge color="secondary" badgeContent={cartCount}></Badge>
            </NavLink>
          </div>
        </div>
      </Nav>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
