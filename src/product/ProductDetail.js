import ChooseQuantity from "../common/ChooseQuantity";
import { ProductData } from "../common/json/ProductData";

const ProductDetail = ({ ProductNo }) => {
    const product = ProductData.find((item) => item.ProductNo === ProductNo);

    if (!product) {
        return (
            <div style={{ textAlign: "center" }}>Sản phẩm không tồn tại</div>
        );
    }

    return (
        <div id='ProductDetail'>
            <div className='product-detail-img'>
                <img src={product.ProductImage[1]}></img>
            </div>
            <div className='product-detail-content'>
                <div className='product-content-name'>
                    {product.ProductDescription}
                </div>
                <div className='product-content-code'>
                    {product.ProductName}
                </div>
                <div className='product-content-description'>
                    Cân bằng và bổ sung độ ẩm cho da <br />
                    Làm dịu, nhanh lành vết thương
                </div>
                <div className='product-content-capacity'>
                    Dung tích: {product.ProductCapacity}
                </div>
                <div className='product-content-origin'>Xuất xứ: Hàn Quốc</div>
                <div className='product-content-vote'>
                    <i class='fa-solid fa-star fa-sm'></i>
                    {product.ProductVote}
                </div>
                <div className='product-content-price'>
                    {product.ProductPrice}
                </div>
                <div className='product-content-quantity'>
                    <ChooseQuantity originQuantity={1} />
                </div>
                <div className='button product-content-add-btn'>
                    Thêm vào giỏ hàng
                </div>
                <div className='button product-content-buy-btn'>Mua hàng</div>
            </div>
        </div>
    );
};

export default ProductDetail;
