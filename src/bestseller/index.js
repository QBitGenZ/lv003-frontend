import Header from "../common/Header";
import Footer from "../common/Footer";
import ProductsBody from "./ProductsBody";
import { useState, useEffect } from "react";
import SearchBody from "../common/SearchBody";
import "./Products.css";

const Brands = () => {
    const [isShowSearch, setIsShowSearch] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductType();
    }, []);

    const getProductType = () => {
        fetch(`${process.env.REACT_APP_IP}/v1/products/best-seller`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setProducts(data?.data);
                console.log(data?.data);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div id='Brands'>
            <Header
                isShowSearch={isShowSearch}
                setIsShowSearch={setIsShowSearch}
            />
            {isShowSearch ? (
                <SearchBody setIsShowSearch={setIsShowSearch} />
            ) : (
                <>
                    <div className='products-title'>Sản phẩm bán chạy</div>
                    <ProductsBody products={products} />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Brands;
