import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import { Alert } from "react-bootstrap";

const ConditionalNavLink = ({ to, children }) => {
  const { cart } = useContext(PizzaContext);
  const [showAlert, setShowAlert] = useState(false);

  const handleLinkClick = () => {
    if (cart.length === 0) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  if (cart.length > 0) {
    return <NavLink to={to}>{children}</NavLink>;
  } else {
    return (
      <div style={{ position: "relative", display: "inline-block" }}>
        <span onClick={handleLinkClick}>{children}</span>
        {showAlert && (
          <Alert
            variant="danger"
            className="position-fixed bottom-0 end-0 m-3"
            style={{ zIndex: 999 }}
          >
            El Carrito esta vacío!
          </Alert>
        )}
      </div>
    );
  }
};

export default ConditionalNavLink;
