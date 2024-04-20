import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import OrderBody from "./OrderBody";
import { OrderStatus } from "../common/json/OrderStatus";
import SearchBody from "../common/SearchBody";
import "./Order.css";

const Order = () => {
    const [isShowSearch, setIsShowSearch] = useState(false);

    const [order, setOrder] = useState();
    const { id } = useParams();

    useEffect(() => {
        getOrderById();
        return () => {
            console.log("unmount");
        };
    }, []);

    const getOrderById = () => {
        fetch(`${process.env.REACT_APP_IP}/v1/orders/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setOrder(data?.data);
                console.log(data);
            })
            .catch((error) => {
                // alert("Lỗi kết nối đến server");
                console.log(error);
            });
    };

    return (
        <div id='Order'>
            <Header
                isShowSearch={isShowSearch}
                setIsShowSearch={setIsShowSearch}
            />
            {isShowSearch ? (
                <SearchBody setIsShowSearch={setIsShowSearch} />
            ) : (
                <>
                    <OrderBody order={order} status={OrderStatus} />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Order;
