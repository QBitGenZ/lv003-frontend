import Footer from "../common/Footer";
import ProductDetail from "./ProductDetail";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";
import ProductRecommend from "./ProductRecommend";
import ProductComments from "./ProductComments";

const ProductBody = ({ product }) => {
    return (
        <div className='ProductBody'>
            <ProductDetail product={product} />
            <ProductDescription product={product} />
            {/* <ProductReviews />
            <ProductComments /> */}
            <ProductRecommend />
            <Footer />
        </div>
    );
};

export default ProductBody;
