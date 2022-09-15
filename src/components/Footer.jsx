import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import styled from "styled-components";

const Container = styled.div`
  background-color: #fbf0f4;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  min-width: 230px;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>DUVERA.</Logo>
          <Desc>
            Conditions of Use & Sale Privacy Notice Interest-Based Ads ©2022,
            Duvera.com, Inc. or its affiliates
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon color="E60023">
              <PinterestIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man's Clothing</ListItem>
            <ListItem>Womens's Clothing</ListItem>
            <ListItem>Eletronics</ListItem>
            <ListItem>Jewelery </ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <RoomIcon style={{ marginRight: "10px" }} />
            5181 W Charleston Blvd #120, Las Vegas, NV 89146، USA
          </ContactItem>
          <ContactItem>
            <PhoneIcon style={{ marginRight: "10px" }} /> +1 234 56 78
          </ContactItem>
          <ContactItem>
            <MailOutlineIcon style={{ marginRight: "10px" }} /> contact@shop.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
