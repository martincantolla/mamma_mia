import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";

const Home = () => {
  const { pizza, addToCart, cart, capitalizeFirstLetter, formatNumber } =
    useContext(PizzaContext);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = (pizzaItem) => {
    addToCart(pizzaItem);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {pizza.map((pizzaItem) => (
          <Col key={pizzaItem.id}>
            <Card>
              <Card.Img
                variant="top"
                src={pizzaItem.img}
                alt={pizzaItem.name}
              />
              <Card.Body>
                <Card.Title>{capitalizeFirstLetter(pizzaItem.name)}</Card.Title>
                <Card.Text>
                  Ingredientes: {pizzaItem.ingredients.join(", ")}
                </Card.Text>
                <Card.Text>Price: ${formatNumber(pizzaItem.price)}</Card.Text>
                <Button
                  className="butt"
                  variant="primary"
                  onClick={() => handleAddToCart(pizzaItem)}
                >
                  Agregar al Carrito
                </Button>
                <Link to={`/pizza/${pizzaItem.id}`}>
                  <Button className="butt" variant="secondary">
                    Ver Detalle
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {showAlert && (
        <Alert variant="success" className="position-fixed bottom-0 end-0 m-3">
          Pizza agregada al Carrito!
        </Alert>
      )}
    </div>
  );
};

export default Home;
