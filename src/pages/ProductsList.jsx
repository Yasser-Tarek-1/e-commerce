import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Product from "../components/Product";

import { md } from "../responsive";

const Container = styled.div`
  padding: 32px 16px;
  max-width: 1400px;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 1px;
  ${md({ fontSize: "24px" })}
`;

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 60px;
  align-items: center;
  justify-content: center;
`;

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  let location = useLocation();
  let loc = location.pathname.slice(10);

  useEffect(() => {
    const getCat = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/category/${loc}`
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCat();
  }, [loc]);

  return (
    <Container>
      <Title>{loc.replace("%20", " ")}</Title>
      <Wrapper>
        {products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default ProductsList;
