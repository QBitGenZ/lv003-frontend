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
            <Route path='checkout' element={<Checkout />}></Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
