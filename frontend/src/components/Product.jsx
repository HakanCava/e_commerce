import { styled } from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import {mobile} from "../styles"
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #80808042;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  /* border:1px solid red; */
  ${mobile({ width: "280px", margin: "5px auto" })}

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  width: 85%;
  object-fit: contain;
  z-index: 2;
  ${mobile({ width: "55% " })};
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlinedIcon />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
