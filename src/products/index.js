import Header from "../common/Header";
import Footer from "../common/Footer";
import ProductsBody from "./ProductsBody";
import { useState, useEffect } from "react";
import SearchBody from "../common/SearchBody";
import "./Products.css";
import { useParams } from "react-router-dom";

const Products = () => {
    const [isShowSearch, setIsShowSearch] = useState(false);
    const [types, setTypes] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        setSelectedTypes(type);
        getProductType();
    }, []);

    const getProductType = () => {
        fetch(`${process.env.REACT_APP_IP}/v1/product-types?limit=1000`, {
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
                setTypes(data?.data);
            })
            .catch((error) => console.log(error));
    };

    const handleChangeTypes = (e) => {
        setSelectedTypes(e.target.value);
    };

    return (
        <div id='Products'>
            <Header
                isShowSearch={isShowSearch}
                setIsShowSearch={setIsShowSearch}
            />
            {isShowSearch ? (
                <SearchBody setIsShowSearch={setIsShowSearch} />
            ) : (
                <>
                    <div className='products-title'>
                        Danh mục sản phẩm
                        <div
                            className='products-filter'
                            style={{ display: "inline-block", float: "right" }}>
                            <select onChange={(e) => handleChangeTypes(e)}>
                                <option value='all'>-- Tất cả --</option>
                                {types?.map((type) => {
                                    return (
                                        <option value={type?.name}>
                                            {type?.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <ProductsBody selectedType={selectedTypes} />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Products;
