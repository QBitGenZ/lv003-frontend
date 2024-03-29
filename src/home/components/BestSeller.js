import { useEffect, useState } from "react";
import BestSellerItem from "./BestSellerItem";

export default function () {
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
        <div className='BestSeller'>
            <div className='title'>Best Sellers</div>
            <div className='items-container'>
                {products.map((value, index) => {
                    if (index < 5) return <BestSellerItem product={value} />;
                })}
            </div>
        </div>
    );
}
