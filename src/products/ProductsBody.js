import { useState, useEffect } from "react";
import BestSellerItem from "../home/components/BestSellerItem";

const ProductsBody = () => {
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
        <div id='ProductsBody'>
            <div className='products-body-row-1'>
                {products?.map((item) => (
                    <BestSellerItem product={item} />
                ))}
            </div>
            <div className='products-body-row-2'>
                {products?.map((item) => (
                    <BestSellerItem product={item} />
                ))}
            </div>
        </div>
    );
};

export default ProductsBody;
