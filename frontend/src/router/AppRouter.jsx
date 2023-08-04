import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Success from "../pages/Success";
import NotFound from "../pages/NotFound";



const AppRouter = () => {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
