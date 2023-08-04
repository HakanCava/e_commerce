import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "../styles";
import useAxios from "../hooks/useAxios";
import { resetCart } from "../features/cartSlice";
import spinner from "../assets/Spinner-2.gif";

const Success = () => {
  const location = useLocation();
  const { stripeData: data, products: cart } = location.state;
  const { axiosPublic } = useAxios();
  const dispatch = useDispatch();
  const { currentUser, userId } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.cart);

  const [orderId, setOrderId] = useState(null);
  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await axiosPublic.post("/orders", {
          userId: userId,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
        dispatch(resetCart());
      } catch (error) {
        console.log(error);
      }
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading && <img src={spinner} alt="loading..." />}
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <Link
        href="/"
        style={{
          padding: 10,
          marginTop: 20,
          fontSize: "20px",
          textDecoration: "none",
          backgroundColor: "#63c2ff",
          color: "white",
        }}
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default Success;
