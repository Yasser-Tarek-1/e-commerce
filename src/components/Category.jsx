import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Info = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
`;
const Title = styled.div`
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
`;
const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  outline: none;
  padding: 12px 24px;
  margin-top: 10px;
  transition: all 0.5s ease;
  border-width: 0.5px;
  &:hover {
    background-color: #fbf0f4;
  }
`;
const ImgContainer = styled.div``;
const Image = styled.img`
  width: 250px;
  height: 350px;
`;

const Category = ({ category }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getCat = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        // let reg = category.match(/\S/gi).join("");
        setItems({
          cat: category,
          img: res.data[2].image,
        });
      } catch (err) {
        console.log(err);
      }
    };
    getCat();
  }, [category]);

  return (
    <Container>
      <ImgContainer>
        <Image src={items?.img} />
      </ImgContainer>
      <Info>
        <Title>{items?.cat}</Title>
        <Link
          to={`products/${items?.cat}`}
          style={{ textDecoration: "none", color: "#000" }}
        >
          <Button>Shop Now.</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default Category;
