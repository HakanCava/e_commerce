import SendIcon from '@mui/icons-material/Send';
import { styled } from 'styled-components';
import {ContainerFlex,   Title,mobile, tablet } from "../styles";




const ContainerNews={
    height: "60vh",
    backgroundColor: "#EFFBF5",
    flexDirection: "column",
}
const TitleNews=styled(Title)`
font-size: 70px;
margin-bottom: 20px;
${tablet({ fontSize: "30px" })}
${mobile({ fontSize: "30px" })}
`

const Description=styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${tablet({ textAlign:"center" })}
    ${mobile({ textAlign:"center" })}
`
const InputContainer=styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${tablet({ width: "80%" })}
    ${mobile({ width: "80%" })}
`
const Input=styled.input`
    border: none;
    flex: 8;
    outline: none;
    padding-left: 20px;
`
const Button=styled.button`
    flex: 1;
    cursor: pointer;
    border: none;
    color:white;
    background-color: #63c2ff;
`

const NewsLetter = () => {

  return (
    <ContainerFlex style={ContainerNews}>
        <TitleNews>Newsletter</TitleNews>
        <Description>Get timely updates from your favorite pruducts</Description>
        <InputContainer>
        <Input placeholder='Your Email'/>
        <Button><SendIcon/></Button>
        </InputContainer>
    </ContainerFlex>
  )
}

export default NewsLetter