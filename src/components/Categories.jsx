import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Category from "./Category";
import { md } from "../responsive";

const Container = styled.div`
  padding: 32px 16px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;
const Title = styled.div`
  font-size: 70px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 50px;
  ${md({ fontSize: "40px" })}
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
`;

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCat = async () => {
      try {
        const res = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCat();
  }, []);

  return (
    <Container id="categories">
      <Title>Categories</Title>
      <Wrapper>
        {categories.map((category) => {
          return <Category category={category} key={category} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default Categories;
