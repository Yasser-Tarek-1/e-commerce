import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { md } from "../responsive";
const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 16px;
  background-color: ${(props) => props.color};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  max-width: 1400px;
  margin: auto;
`;

const Left = styled.div`
  font-size: 26px;
  font-weight: 700;
  flex: 1;
  ${md({ flex: "auto", display: "none" })}
`;

const Search = styled.div`
  border: 0.5px solid gray;
  display: flex;
  align-items: center;
  padding: 4px 6px;
  width: fit-content;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const Logo = styled.h1`
  flex: 1;
  text-align: center;
  text-transform: uppercase;
  ${md({ textAlign: "left" })}
`;
const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const Navbar = () => {
  const [bgColor, setBgColor] = useState("");
  const loc = useLocation();

  useEffect(() => {
    if (loc.pathname !== "/") {
      setBgColor("#fbf0f4");
    } else {
      setBgColor("");
    }
  }, [loc]);
  const { cart } = useSelector((state) => state.cart);

  return (
    <Container color={bgColor}>
      <Wrapper>
        <Left>
          <Search>
            <Input placeholder="Search..." />
            <SearchIcon style={{ cursor: "pointer", fontSize: "18px" }} />
          </Search>
        </Left>
        <Logo>
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            Duvera.
          </Link>
        </Logo>
        <Right>
          <Link style={{ color: "#000" }} to="/cart">
            <Badge badgeContent={cart.length} color="primary">
              <ShoppingCartOutlinedIcon
                style={{ cursor: "pointer", fontSize: "28px" }}
              />
            </Badge>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
