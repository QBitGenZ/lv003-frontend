import { ProductData } from "../common/json/ProductData";
import { useState, useEffect } from "react";

const ProductDetail = ({ ProductNo }) => {
    const product = ProductData.find((item) => item.ProductNo === ProductNo);
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const handleChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity) && newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    useEffect(() => {
        localStorage.setItem("productQuantity", quantity.toString());
    }, [quantity]);

    useEffect(() => {
        const savedQuantity = localStorage.getItem("productQuantity");
        if (savedQuantity) {
            setQuantity(parseInt(savedQuantity));
        }
    }, []);

    if (!product) {
        return (
            <div style={{ textAlign: "center" }}>Sản phẩm không tồn tại</div>
        );
    }

    return (
        <div className='ProductDetail'>
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
                    <span className='minus' onClick={handleDecrease}>
                        -
                    </span>
                    <input
                        type='number'
                        value={quantity}
                        onChange={handleChange}
                        min='1'></input>
                    <span className='plus' onClick={handleIncrease}>
                        +
                    </span>
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
