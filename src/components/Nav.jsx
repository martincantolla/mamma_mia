import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import ConditionalNavLink from "./ConditionalNavLink";

const Nav = () => {
  const { cartPrice, formatNumber } = useContext(PizzaContext);

  return (
    <>
      <nav className="navbar" id="navigation">
        <div className="navEle">
          <i className="fa-solid fa-pizza-slice"></i>{" "}
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Pizzeria Mamma Mia!
          </NavLink>
        </div>
        <div className="navEle">
          <ConditionalNavLink
            to="/carrito"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            ${formatNumber(cartPrice)}
            <i className="fa-solid fa-cart-shopping"></i>
          </ConditionalNavLink>
        </div>
      </nav>
      <div className="pizzadiv"></div>
    </>
  );
};

export default Nav;
