import { ProductData } from "../json/ProductData";

const BestSellerItem = ({ ProductNo }) => {
    const product = ProductData.find((item) => item.ProductNo === ProductNo);

    if (!product) {
        return <div>Sản phẩm không tồn tại</div>;
    }

    return (
        <div className='BestSellerItem'>
            <div className='product-top'>
                <div className='product-image'>
                    <img src={product.ProductImage}></img>
                </div>
                <div className='product-name'>{product.ProductName}</div>
                <div className='product-description'>
                    {product.ProductDescription}
                </div>
            </div>
            <div className='product-bot'>
                <div className='product-vote'>
                    <i class='fa-solid fa-star fa-sm'></i> {product.ProductVote}
                </div>
                <div className='product-price'>{product.ProductPrice}</div>
            </div>
        </div>
    );
};

export default BestSellerItem;
