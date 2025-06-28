import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/userLayout";
import Home from "./pages/Home";
import {Toaster} from 'sonner'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/product/ProductDetails";
import CheckOut from "./components/Cart/CheckOut";
import OrderComfirmationPage from "./pages/OrderComfirmationPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import MyOrderPage from "./pages/MyOrderPage";
function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-right"/>
      <Routes>
        {/* User layout with nested routes */}
        <Route path="/" element={<UserLayout />} >

          <Route index element={<Home />} />

          <Route path="login" element={<Login />} />

          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="collections/:collection" element={<CollectionPage />} />
          <Route path="product/:id" element={<ProductDetails />} />

          <Route path="checkout" element={<CheckOut />}/>
          <Route path="order-confirmation" element={<OrderComfirmationPage />}/>
          <Route path="order/:id" element={<OrderDetailsPage />}/>
          <Route path="/my-orders" element={<MyOrderPage />}/>

        </Route>

        {/* Admin layout */}
        <Route path="/admin" element={<div>Admin layout</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
