import { useEffect, useState } from "react";
import BestSellerItem from "./BestSellerItem";

export default function () {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getBestSeller();
    }, []);

    const getBestSeller = () => {
        fetch(`${process.env.REACT_APP_IP}/v1/products/best-seller`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setProducts(data?.data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className='BestSeller'>
            <div className='title'>Best Sellers</div>
            <div className='items-container'>
                {products.map((product) => {
                    return <BestSellerItem product={product?.product} />;
                })}
            </div>
        </div>
    );
}
