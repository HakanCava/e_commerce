import React, { useState } from "react";
import {
  ContainerFlex,
  Wrapper,
  Input,
  Title,
  Form,
  Button,
  Link,
  mobile,
} from "../styles";
import registerLogo from "../assets/register.svg";
import { styled } from "styled-components";

import useAuthCalls from "../hooks/useAuthCalls";

const Container = styled(ContainerFlex)`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${registerLogo}) center;
  background-repeat: no-repeat;

  ${mobile({ backgroundSize: "contain" })}
`;

const WrapperRegister = styled(Wrapper)`
  width: 45%;
  padding: 20px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  opacity: 0.8;
  ${mobile({ width: "75%", marginTop: "40px" })}
`;
const TitleRegister = styled(Title)`
  ${mobile({ fontSize: "20px" })}
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const ContLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { register } = useAuthCalls();

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ username, email, password });
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <WrapperRegister>
        <TitleRegister>SIGN UP</TitleRegister>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <Input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordanse with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>REGISTER</Button>
        </Form>
        <ContLink>
          <Link
            href="/login"
            style={{ textDecoration: "none", fontSize: "13px", color: "gray" }}
          >
            Have an account?
          </Link>
          <Link href="/">CONTINUE WITHOUT A MEMBER</Link>
        </ContLink>
      </WrapperRegister>
    </Container>
  );
};

export default Register;
