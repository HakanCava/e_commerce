import { styled } from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile, tablet, laptop, bigLaptop } from "../styles";

const Container = styled.div`
  display: grid;
  grid-template: 1fr 1fr 1fr 1fr;
  gap: 10px;
  grid-auto-flow: row;
  grid-template-areas: ". . . .";
  ${bigLaptop({ padding: "0px", gridTemplateAreas: `". . ."` })};
  ${laptop({ padding: "0px", gridTemplateAreas: `". ."` })};
  ${tablet({ padding: "0px", gridTemplateAreas: `"."` })};
  ${mobile({ padding: "0px", gridTemplateAreas: `"."` })};
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
