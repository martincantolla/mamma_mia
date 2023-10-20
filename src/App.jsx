import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import PizzaDetail from "./components/PizzaDetail";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<PizzaDetail />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
