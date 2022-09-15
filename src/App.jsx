import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ProductsList from "./pages/ProductsList";
import ProductsItem from "./pages/ProductsItem";
import Cart from "./pages/Cart";
import styled from "styled-components";

const Container = styled.div``;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/products/:category" element={<ProductsList />} />
      </Routes>
      <Routes>
        <Route path="/product/:id" element={<ProductsItem />} />
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
