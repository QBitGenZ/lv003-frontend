import { useEffect, useState } from "react";
import BestSellerItem from "../home/components/BestSellerItem";

const ProductRecommend = () => {
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
        <div className='ProductRecommend'>
            <div className='recommend-title'>Có thể bạn sẽ thích</div>
            <div className='recommend-detail'>
                {products.map((item, index) => {
                    if (index < 5) {
                        return <BestSellerItem product={item} />;
                    }
                })}
            </div>
        </div>
    );
};

export default ProductRecommend;
