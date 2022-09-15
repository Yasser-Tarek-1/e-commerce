import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 4px;
  display: flex;
  padding: 60px 0;
  align-items: center;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const ImgContainer = styled.div`
  max-width: 250px;
  height: 350px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const Info = styled.div`
  padding: 16px;
  width: 100%;
  text-align: center;
`;
const Title = styled.div`
  margin: 5px 0;
  font-size: 18px;
  font-weight: bold;
`;
const Price = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

const Product = ({ product }) => {
  return (
    <Container>
      <Link
        to={`/product/${product.id}`}
        style={{ color: "#000", textDecoration: "none" }}
      >
        <Wrapper>
          <ImgContainer>
            <Img src={product.image} />
          </ImgContainer>
          <Info>
            <Title>{product.title.slice(0, 15)}...</Title>
            <Price>${product.price}</Price>
          </Info>
        </Wrapper>
      </Link>
    </Container>
  );
};

export default Product;
