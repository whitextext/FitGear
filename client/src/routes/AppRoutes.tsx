import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import About from "@/pages/About";
import Cart from "@/pages/Cart";
import Products from "@/pages/Products";
import ProductsDetails from "@/pages/productDetails";

/**
 * Defines the public routes for the application.
 * Maps URLs to their corresponding page components.
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductsDetails />} />
    </Routes>
  );
}
