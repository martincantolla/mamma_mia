import React, { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { useParams } from "react-router";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const PizzaDetail = () => {
  const { pizza, addToCart, capitalizeFirstLetter, formatNumber } =
    useContext(PizzaContext);
  const { id } = useParams();

  const selectedPizza = pizza.find((pizzaItem) => pizzaItem.id === id);

  const handleAddToCart = (selectedPizza) => {
    addToCart(selectedPizza);
  };

  return (
    <div className="PizzaDetail d-flex justify-content-center align-items-center">
      <Card style={{ width: "56rem" }}>
        <Row>
          <Col>
            <Card.Img
              variant="top"
              src={selectedPizza.img}
              style={{ height: "100%" }}
            />
          </Col>
          <Col>
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Title>
                {capitalizeFirstLetter(selectedPizza.name)}
              </Card.Title>
              <Card.Text>{selectedPizza.desc}</Card.Text>
              <Card.Text>
                Ingredientes: {selectedPizza.ingredients.join(", ")}
              </Card.Text>
              <Card.Text>
                <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Precio: ${formatNumber(selectedPizza.price)}
                </span>
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => handleAddToCart(selectedPizza)}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default PizzaDetail;
