import Header from "../common/Header";
import Footer from "../common/Footer";
import ProductsBody from "./ProductsBody";
import "./Products.css";

const Products = () => {
    return (
        <div id='Products'>
            <Header />
            <div className='products-title'>Danh mục sản phẩm</div>
            <ProductsBody />
            <Footer />
        </div>
    );
};

export default Products;
