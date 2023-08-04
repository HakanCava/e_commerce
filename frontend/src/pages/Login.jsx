import React, { useState } from "react";
import {
  ContainerFlex,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link,
  tablet,
  laptop,
} from "../styles";
import loginLogo from "../assets/login.svg";
import { styled } from "styled-components";
import useAuthCalls from "../hooks/useAuthCalls";

const Container = styled(ContainerFlex)`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${loginLogo}) center;
  background-size: cover;
  ${tablet({ backgroundSize: "contain", backgroundRepeat: "no-repeat" })}
`;
const WrapperLogin = styled(Wrapper)`
  ${laptop({ width: "55%" })}
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthCalls();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
    setUsername("");
    setPassword("");
  };
  return (
    <Container>
      <WrapperLogin>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button>LOGIN</Button>
          <Link href="#">DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link href="/register">CREATE A NEW ACCOUNT</Link>
          <Link href="/">CONTINUE WITHOUT A MEMBER</Link>
        </Form>
      </WrapperLogin>
    </Container>
  );
};

export default Login;
