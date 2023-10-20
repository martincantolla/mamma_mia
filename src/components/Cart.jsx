import React, { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const Cart = () => {
  const {
    cart,
    setCart,
    cartPrice,
    setCartPrice,
    capitalizeFirstLetter,
    formatNumber,
  } = useContext(PizzaContext);

  const handleIncrease = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const handleDecrease = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity - 1) }
        : item
    );
    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  const calculatePriceForPizza = (id) => {
    const pizza = cart.find((item) => item.id === id);
    return pizza ? pizza.price * pizza.quantity : 0;
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += calculatePriceForPizza(item.id);
    });
    setCartPrice(formatNumber(total));
    return total;
  };

  return (
    <div>
      <Table striped hover variant="light">
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>{capitalizeFirstLetter(item.name)}</td>
              <td>${calculatePriceForPizza(item.id)}</td>
              <td>
                <Button
                  className="butt"
                  onClick={() => handleDecrease(item.id)}
                >
                  -
                </Button>
                {item.quantity}
                <Button
                  className="butt"
                  onClick={() => handleIncrease(item.id)}
                >
                  +
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <h5>Total: ${formatNumber(calculateTotalPrice())}</h5>
      </div>
    </div>
  );
};

export default Cart;
