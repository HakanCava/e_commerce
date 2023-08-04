import { styled } from "styled-components";
import { Link } from "react-router-dom";
import {mobile} from '../styles'

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 1s ease;
  ${mobile({ height: "35vh", objectFit:"contain" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
const Title = styled.h1`
  color: #63c2ff;
  opacity: 0.5;
  margin-bottom: 20px;
  transition: all 0.5s ease;
`;
const Container = styled.div`
  margin: 3px;
  height: 40vh;
  position: relative;

  &:hover {
    ${Title} {
      opacity: 1;
    }
    ${Image} {
      transform: scale(1.015);
    }
  }
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #ffffffb7;
  color: gray;
  font-size: 18px;
  transition: all 0.2s ease;
  font-weight: 400;
  cursor: pointer;
  border-radius: 25px;
  &:hover {
    background-color: white;
    color: #585858;
    font-weight: 600;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.category}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
