import { styled } from "styled-components";
import { keyframes } from "styled-components";
import { mobile } from "./responsive";

export const Container = styled.div`
  
`;

export const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  color: white;
  background-color: #63c2ff;
  font-size: 20px;
  margin: 10px;
  font-weight: 700;
  letter-spacing: 3px;
`;

export const Input = styled.input`
  outline: none;
  padding: 5px;
  margin-top: 10px;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
`;

export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
`;

export const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Left = styled.div`
  flex: 1;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
`;

export const Img = styled.img``;

export const announcement = keyframes`
    
    from {background-color: red; color:white}
    to {background-color: #63c2ff;}
    `;
export const Animation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  padding: 5px;
  height: 30px;
  animation-name: ${announcement};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
  ${mobile({textAlign:"center"})}
`;
