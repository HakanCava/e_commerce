import { useNavigate } from "react-router-dom"
import errorImg from "../assets/404.png"
import { styled } from "styled-components";


const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
background-color:beige;
width:100vw;
height:100vh;
`
export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding:10px;
  color: ${(props)=>props.title!=="home"?"#63c2ff":"white"};
  background-color: ${(props)=>props.title==="home"?"#63c2ff":"white"};
  font-size: 20px;
  margin: 10px;
  font-weight: 300;
  letter-spacing: 3px;
`;



const NotFound = () => {
  const navigate = useNavigate()
  return (
    <Container >
      <img  src={errorImg} alt="" />
      <div>
        <Button title="home" onClick={() => navigate("/")}>
          Home
        </Button>
        <Button title="back" onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    </Container>
  )
}

export default NotFound
