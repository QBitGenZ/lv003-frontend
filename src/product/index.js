import "./Product.css";
import Header from "../common/Header";
import ProductBody from "./ProductBody";
import { useEffect, useState } from "react";
import SearchBody from "../common/SearchBody";
import { useParams } from "react-router-dom";

export default function () {
    const [isShowSearch, setIsShowSearch] = useState(false);

    const [product, setProduct] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_IP}/v1/products/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setProduct(data?.data))
            .catch((error) => console.log(error));
        console.log(product);
    }, []);

    return (
        <>
            <Header
                isShowSearch={isShowSearch}
                setIsShowSearch={setIsShowSearch}
            />
            {isShowSearch ? (
                <SearchBody setIsShowSearch={setIsShowSearch} />
            ) : (
                <ProductBody product={product}></ProductBody>
            )}
        </>
    );
}
