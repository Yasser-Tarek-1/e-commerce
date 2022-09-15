import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adToCart } from "../store/cartSlice";

import { md } from "../responsive";
import { Alert } from "@mui/material";

const Container = styled.div`
  padding: 32px 16px;
  min-height: calc(100vh - 317px);
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 32px 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  ${md({ flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  ${md({ marginBottom: "30px" })}
`;

const Img = styled.img`
  max-width: 250px;
  height: 350px;
`;

const Info = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;
const Title = styled.div`
  font-size: 30px;
  margin-bottom: 18px;
  ${md({ fontSize: "26px" })}
`;

const Desc = styled.p`
  margin-bottom: 20px;
  line-height: 22px;
  font-size: 18px;
  max-width: 600px;
`;

const Price = styled.p`
  font-size: 40px;
  font-weight: 100;
`;

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;
const Cart = styled.div`
  display: flex;
  align-items: center;
`;
const Count = styled.p`
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
const Add = styled.button`
  margin-left: 40px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  padding: 8px;
  text-transform: uppercase;
`;

const Div = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  text-transform: uppercase;
  color: red;
  top: 70px;
`;

const ProductsItem = () => {
  const [productsItem, setProductsItem] = useState({});
  const [count, setCount] = useState(1);
  const [msg, setMsg] = useState("");
  const { cart } = useSelector((state) => state.cart);

  const productInCart = cart.find((item) => item.id === productsItem.id);

  let location = useLocation();
  let loc = location.pathname.slice(9);

  const dispatch = useDispatch();

  const navigate = useNavigate();

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

  useEffect(() => {
    const getCloths = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${loc}`);
        setProductsItem(res.data);
      } catch (erro) {
        console.log(erro);
      }
    };
    getCloths();
  }, [loc]);

  const handelCart = () => {
    if (!productInCart) {
      dispatch(adToCart({ ...productsItem, count }));
      navigate("/");
    } else {
      setMsg("Already added");
    }
  };

  return (
    <Container key={productsItem.id}>
      <Div>{msg && <Alert severity="error">{msg}</Alert>}</Div>
      <Wrapper>
        <ImgContainer>
          <Img src={productsItem.image} />
        </ImgContainer>
        <Info>
          <Title>{productsItem.title}</Title>
          <Desc>{productsItem.description}</Desc>
          <Price>$ {productsItem.price}</Price>
          <CartWrapper>
            <Cart>
              <Increase onClick={increase}>
                <AddIcon />
              </Increase>
              <Count>{count}</Count>
              <Decrease onClick={decrease}>
                <RemoveIcon />
              </Decrease>
            </Cart>
            <Add
              onClick={handelCart}
              style={productInCart && { cursor: "default", opacity: "0.2" }}
            >
              Add to cart
            </Add>
          </CartWrapper>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default ProductsItem;
