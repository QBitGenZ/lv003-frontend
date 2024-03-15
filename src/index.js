import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Login from "./login/index.js";
import Register from "./register/index.js";
import User from "./user/index.js";
import Search from "./search/index.js";
import Product from "./product/index.js";
import Checkout from "./checkout/index.js";
import Cart from "./cart/index.js";
import Order from "./order/index.js";
import ForgotPassword from "./forgotpassword/index.js";
import Cleanser from "./cleanser/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route index element={<App />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
            <Route path='user' element={<User />}></Route>
            <Route path='search' element={<Search />}></Route>
            <Route path='product' element={<Product />}></Route>
            <Route path='cart' element={<Cart />}></Route>
            <Route path='order' element={<Order />}></Route>
            <Route
                path='checkout'
                element={<Checkout step={"delivery"} />}></Route>
            <Route path='forgotpassword' element={<ForgotPassword />}></Route>
            <Route path='cleanser' element={<Cleanser />}></Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
