import { useEffect, useState } from "react";
import BestSellerItem from "../home/components/BestSellerItem";

const ProductRecommend = () => {
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
        <div className='ProductRecommend'>
            <div className='recommend-title'>Có thể bạn sẽ thích</div>
            <div className='recommend-detail'>
                {products.map((item) => (
                    <BestSellerItem product={item} />
                ))}
            </div>
        </div>
    );
};

export default ProductRecommend;
