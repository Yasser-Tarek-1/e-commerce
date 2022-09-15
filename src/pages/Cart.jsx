import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import CartItems from "../components/CartItems";
import { lg } from "../responsive";
import { checkOut } from "../store/cartSlice";
import { Alert } from "@mui/material";

const Container = styled.div`
  padding: 32px 16px;
  min-height: calc(100vh - 317px);
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 1400px;
  margin: 0 auto;
`;

const No = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: auto;
  flex-direction: column;
`;

const Span = styled.span`
  font-size: 40px;
  margin-bottom: 10px;
`;

const Bag = styled.div`
  text-transform: uppercase;
  font-size: 35px;
  font-weight: 300;
  width: fit-content;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${lg({ flexDirection: "column" })}
`;

const Products = styled.div``;

const Check = styled.div`
  max-width: 350px;
  padding: 40px 12px;
  border: 1px solid #000;
  border-radius: 14px;
`;

const Summary = styled.div`
  text-transform: uppercase;
  font-size: 35px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 25px;
`;

const Order = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OrderSub = styled.div`
  margin: 10px 0;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
`;

const Price = styled.p``;

const Total = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-around;
  font-size: 30px;
  font-weight: bold;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  background-color: #000;
  color: #fff;
  outline: none;
  cursor: pointer;
`;

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  let total = 0;
  let shipping = 5;
  const [checkOutDone, setCheckOutDone] = useState(false);
  const dispatch = useDispatch();

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].count;
  }

  const checkoutHandler = () => {
    dispatch(checkOut(total));
    setCheckOutDone(true);
  };

  return (
    <Container>
      {cart?.length ? (
        <>
          <Bag>Your Bag</Bag>
          <Wrapper>
            <Products>
              {cart.map((item) => {
                return <CartItems item={item} key={item.id} />;
              })}
            </Products>
            <Check>
              <Summary> Order Summary</Summary>
              <Order>
                <OrderSub>Subtotal</OrderSub>
                <Price>$ {total?.toFixed("1")}</Price>
              </Order>
              <Order>
                <OrderSub>Shipping</OrderSub>
                <Price>$ {shipping}</Price>
              </Order>
              <Total>
                Total
                <Price>$ {(total + shipping)?.toFixed("1")}</Price>
              </Total>
              <Button onClick={checkoutHandler}>Checkout now</Button>
            </Check>
          </Wrapper>
        </>
      ) : (
        <No>
          {checkOutDone && (
            <Alert
              severity="success"
              style={{ width: "fit-content", margin: "0 auto 10px" }}
            >
              Checkout Done!
            </Alert>
          )}

          <Span> No Item To show</Span>
          <Link to="/" style={{ color: "#000", fontSize: "18px" }}>
            Back To Home
          </Link>
        </No>
      )}
    </Container>
  );
};

export default Cart;
