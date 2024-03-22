import { useEffect, useState } from "react";
import SummaryCartItem from "./SummaryCartItem";
import "./SummaryCart.css";

const SummaryCart = ({ className }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/v1/products", {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setProducts(data?.data))
            .catch((error) => console.log(error));
    }, []);
    return (
        <div id='SummaryCart' className={className}>
            <div className='summary-cart-title'>Giỏ hàng của bạn</div>
            <div className='summary-cart-body'>
                {products.map((product, index) => {
                    if (index < 3) {
                        return <SummaryCartItem product={product} />;
                    }
                })}
            </div>
        </div>
    );
};

export default SummaryCart;
