import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import { styled } from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  ContainerFlex,
  Left,
  Center,
  Right,
  MenuItem,
  Input,
  Title,
  mobile,
  tablet,
  laptop,
} from "../styles";
import { useSelector } from "react-redux";
import useAuthCalls from "../hooks/useAuthCalls";

const ContainerNav = styled(Container)`
  ${tablet({ marginBottom: "25px" })}
  ${mobile({ marginBottom: "25px" })}
`;

const Wrapper = styled(ContainerFlex)`
  padding: 10px 20px;
  justify-content: space-between;
  ${tablet({ flexDirection: "column" })}
  ${mobile({ flexDirection: "column" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin: 5px;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled(ContainerFlex)`
  border: 0.5px solid lightgray;
  margin-left: 25px;
  padding: 5px;
  width: 450px;
  ${laptop({ width: "340px", padding: "0", margin: "20px 0" })}
  ${tablet({ width: "300px", padding: "0", margin: "20px 0" })}
${mobile({ width: "250px", padding: "0", margin: "20px 0" })}
`;

const Logo = styled(Title)`
  cursor: pointer;
  ${laptop({ fontSize: "24px", marginLeft: "5px" })}
  ${tablet({ fontSize: "14px", marginLeft: "5px", fontWeight: 500 })}
${mobile({ fontSize: "14px", marginLeft: "5px", fontWeight: 500 })}
`;
const Button = styled.button`
  background-color: white;
  border: none;
  text-decoration: underline;
  cursor: pointer;
`;

const Navbar = () => {
  const { products } = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.auth);
  const { logout } = useAuthCalls();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
  };
  return (
    <ContainerNav>
      <Wrapper>
        <Left>
          <Logo onClick={() => navigate("/")}>MyBazaarCava</Logo>
        </Left>

        <Center>
          <Language>EN</Language>
          <SearchContainer>
            <Input
              placeholder="Search"
              style={{ border: "none", width: "90%" }}
            />
            <SearchIcon style={{ color: "#63c2ff", fontSize: 18 }} />
          </SearchContainer>
        </Center>

        <Right>
          {!currentUser ? (
            <>
              <Link to="/register">
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to="/login">
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          ) : (
            <Button onClick={handleClick}>
              <MenuItem>LOGOUT</MenuItem>
            </Button>
          )}
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={products.length} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </ContainerNav>
  );
};

export default Navbar;
