import { ProductData } from "../common/json/ProductData";
import BestSellerItem from "../home/components/BestSellerItem";

const ProductRecommend = () => {
    return (
        <div className='ProductRecommend'>
            <div className='recommend-title'>Có thể bạn sẽ thích</div>
            <div className='recommend-detail'>
                {ProductData.map((item) => (
                    <BestSellerItem product={item} />
                ))}
            </div>
        </div>
    );
};

export default ProductRecommend;
