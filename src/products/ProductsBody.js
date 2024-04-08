import { useState, useEffect } from "react";
import BestSellerItem from "../home/components/BestSellerItem";

const ProductsBody = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_IP}/v1/products`, {
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
                {products?.map(
                    (item, index) =>
                        index < 5 && <BestSellerItem product={item} />
                )}
            </div>
            <div className='products-body-row-2'>
                {products?.map(
                    (item, index) =>
                        index < 5 && <BestSellerItem product={item} />
                )}
            </div>
        </div>
    );
};

export default ProductsBody;
