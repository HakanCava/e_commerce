import React, { useState } from "react";
import { styled } from "styled-components";
import { tablet } from "../styles";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { resetProduct, updateProduct } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${tablet({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  ${tablet({ width: "100px" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${tablet({ fontSize: "12px" })}
`;

const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${tablet({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
  ${tablet({ marginBottom: "20px" })}
`;

const CartComp = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity((prevQ) => prevQ - 1);
      dispatch(updateProduct({ ...product, quantity: quantity - 1 }));
    } else {
      setQuantity((prevQ) => prevQ + 1);
      dispatch(updateProduct({ ...product, quantity: quantity + 1 }));
    }
  };
  const handleClick = (id) => {
    dispatch(resetProduct(id));
  };

  return (
    <Product key={product._id}>
      <ProductDetail>
        <Image src={product.img} />
        <Details>
          <ProductName>
            <b>Product:</b> {product.title}
          </ProductName>
          <ProductId>
            <b>ID:</b>
            {product._id}
          </ProductId>
          <ProductColor color={product.color} />
          <ProductSize>
            <b>Size:</b> {product.size}
          </ProductSize>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductAmountContainer>
          <AddBoxIcon onClick={() => handleQuantity("inc")} />
          <ProductAmount>{quantity}</ProductAmount>
          <IndeterminateCheckBoxIcon onClick={() => handleQuantity("dec")} />
          <DeleteForeverIcon
            style={{ marginLeft: "50px", fontSize: "30px" }}
            onClick={() => handleClick(product._id)}
          />
        </ProductAmountContainer>
        <ProductPrice style={{ textAlign: "left", width: "145px" }}>
          $ {product.price * quantity}
        </ProductPrice>
      </PriceDetail>
    </Product>
  );
};

export default CartComp;
