import { styled } from "styled-components";
import { Animation, mobile,tablet } from "../styles";

const Container = styled(Animation)`
${tablet({ textAlign: "center" })};
  ${mobile({ textAlign: "center",padding:"20px" })};
`;

const Announcment = () => {
  return (
    <Container>
      This Week Super Deal! Free shipping on Orders Over $75
    </Container>
  );
};

export default Announcment;
