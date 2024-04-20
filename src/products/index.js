import Header from "../common/Header";
import Footer from "../common/Footer";
import ProductsBody from "./ProductsBody";
import { useState } from "react";
import SearchBody from "../common/SearchBody";
import "./Products.css";

const Products = () => {
    const [isShowSearch, setIsShowSearch] = useState(false);

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
                    <div className='products-title'>Danh mục sản phẩm</div>
                    <ProductsBody />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Products;
