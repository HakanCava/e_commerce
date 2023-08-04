import { styled } from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { ContainerFlex, Title } from "../styles";
import { mobile, tablet, laptop } from "../styles";

const Container = styled.div`
  display: flex;

  ${laptop({ flexDirection: "column" })}
  ${tablet({ flexDirection: "column" })}
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled(ContainerFlex)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ fontSize: "12px" })}
`;

const TitleF = styled(Title)`
margin-bottom: 10px;
${mobile({ fontSize: "18px",fontWeight:500, })}
 
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
  ${laptop({ backgroundColor: "lightGray" })}
`;
const ContactItem = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  ${mobile({ fontSize: "12px" })}
`;
const Payment = styled.img`
  /* border:1px solid black; */
  width: 100%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <TitleF>MyBazaarCava</TitleF>
        <Description>There ara a millons products in MyBazaar...</Description>
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
        <TitleF>Useful Links</TitleF>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <TitleF>Contact</TitleF>
        <ContactItem>
          <RoomIcon style={{ marginRight: "20px" }} /> Istanbul / Turkey
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "20px" }} /> +90 1233456
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{ marginRight: "20px" }} />{" "}
          mybazaarcava@mybazaar.com
        </ContactItem>

        <Payment src="https://cdn.webshopapp.com/shops/218525/files/371942398/payment-methods-epicerie-ludo.png" />
      </Right>
    </Container>
  );
};

export default Footer;
