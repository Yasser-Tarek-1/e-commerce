import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useDispatch } from "react-redux";
import { updateCart, deleteItem } from "../store/cartSlice";

import DeleteIcon from "@mui/icons-material/Delete";

import { md } from "../responsive";

const Product = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  ${md({ flexDirection: "column" })}
`;
const ImgContainer = styled.div``;
const Img = styled.img`
  width: 250px;
  margin-right: 50px;
  ${md({ marginRight: "0" })}
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${md({ margin: "20px 0" })}
  max-width: 350px;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
`;

// const ProductSub = styled.div`
//   font-weight: bold;
//   font-size: 20px;
//   margin-right: 3px;
// `;
const ProductName = styled.div`
  font-size: 18px;
`;
const Delete = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Count = styled.div`
  margin: 10px 0;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
`;
const CountP = styled.p`
  width: 40px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const Increase = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 30px;
`;
const Decrease = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 30px;
`;

const TotPrice = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;
const CartItems = ({ item }) => {
  const [count, setCount] = useState(item.count);

  const dispatch = useDispatch();

  const increase = () => {
    if (count < 10) {
      setCount((prev) => prev + 1);
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const deleted = () => {
    dispatch(deleteItem(item));
  };

  useEffect(() => {
    dispatch(updateCart({ ...item, count}));
  }, [count, item, dispatch]);

  return (
    <Product>
      <ImgContainer>
        <Img src={item.image} />
      </ImgContainer>
      <Info>
        <Name>
          <ProductName>{item.title}</ProductName>
          <Delete onClick={deleted}>
            <DeleteIcon />
          </Delete>
        </Name>
        <Count>
          <CartItem>
            <Increase onClick={increase}>
              <AddIcon />
            </Increase>
            <CountP>{count}</CountP>
            <Decrease onClick={decrease}>
              <RemoveIcon />
            </Decrease>
          </CartItem>
          <TotPrice>$ {item.price * count}</TotPrice>
        </Count>
      </Info>
    </Product>
  );
};

export default CartItems;
