import { useEffect, useState } from "react";
import { ProductData } from "../common/json/ProductData";
import Swiper from "../home/components/Swiper";
import { useCollapse } from "react-collapsed";

const ProductBody = ({ ProductNo }) => {
    const [quantity, setQuantity] = useState(1);
    const { getCollapseProps, getToggleProps } = useCollapse();
    const product = ProductData.find((item) => item.ProductNo === ProductNo);

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
        <div className='ProductBody'>
            <div className='product-detail-container'>
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
                    <div className='product-content-origin'>
                        Xuất xứ: Hàn Quốc
                    </div>
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
                    <div className='button product-content-buy-btn'>
                        Mua hàng
                    </div>
                </div>
            </div>
            <div className='product-detail-expand'>
                <div className='expand-title' {...getToggleProps()}>
                    <span>Mô tả sản phẩm</span>
                    <i class='fa-solid fa-plus'></i>
                </div>
                <div {...getCollapseProps()}>
                    <div className='expand-content'>
                        <p>
                            Công dụng tinh chất rau má cấp ẩm Skin1004
                            Madagascar Centella Hyalu-Cica Blue Serum
                        </p>
                        <ul>
                            <li>
                                Chiết xuất rau má vùng Madagascar giàu vitamin
                                A,B1,B2,B3,C giúp làm mờ vết thâm nám,dưỡng
                                trắng da cũng như chống lão hoá cho da săn chắc
                                mịn màng.
                            </li>
                            <li>
                                Titerpenoids pentacylic tăng cường lưu thông máu
                                dưới da kích thích tái tạo tế bào da mới.
                            </li>
                            <li>
                                Rau má còn chứa chất giảm viêm, ức chế vi khuẩn
                                gây mụn, làm dịu da và se khít lỗ chân lông.
                            </li>
                            <li>
                                Công thức pha trộn tỉ lệ hoàn hảo giữa
                                Hyaluronic acid và Cica của Skin1004 giúp đem
                                lại khả năng làm dịu tuyệt vời
                            </li>
                            <li>
                                Phù hợp mọi loại da, đặc biệt là da dầu thiếu
                                nước
                            </li>
                        </ul>
                        <p>
                            Thành phần Skin1004 Madagascar Centella Hyalu-Cica
                            Blue Serum:
                        </p>
                        <ul>
                            <li>
                                Chứa 5 loại Hyaluronic acid với các trọng lượng
                                phân tử khác nhau, giúp cấp nước cho đủ các tầng
                                da
                            </li>
                            <li>
                                Công thức độc quyền “Hyalu-Cica” chứa chiết xuất
                                rau má hàm lượng cao giúp làm dịu da và 3 loại
                                Hyaluronic acid giúp củng cố hàng rào độ ẩm, cân
                                bằng lượng dầu và nước
                            </li>
                            <li>
                                Ceramide Biome: Ceramide có kích thước nano, nhỏ
                                hơn lỗ chân lông nhanh chóng thấm sâu vào trong
                                da, mang lại độ đàn hồi, săn chắc và củng cố
                                hàng rào bảo vệ da
                            </li>
                            <li>
                                Niacinamide bà Adenosine: cải thiện độ đàn hồi,
                                giảm thiểu vết nhăn trên da
                            </li>
                            <li>
                                Chiết xuất Hedera Helix: giúp làm dịu làn da thô
                                ráp, đem lại sức sống cho làn da
                            </li>
                            <li>
                                Chất dạng gel, thấm nhanh, không dính, nhẹ mặt
                            </li>
                        </ul>
                        <p>
                            – Hướng dẫn sử dụng: Sau khi rửa mặt và sử dụng
                            toner, lấy một lượng sản phẩm vừa đủ rồi thoa lên
                            mặt theo chiều kết cấu da.
                        </p>
                        <p>
                            – Lưu ý: Ngưng sử dụng khi xuất hiện tình trạng kích
                            ứng da, bảo quản nơi tránh ánh sáng mặt trời.
                        </p>
                    </div>
                </div>
            </div>
            <div className='product-reviews'>
                <div className='reviews-title'>Đánh giá sản phẩm</div>
                <div className='reviews-left-side'></div>
                <div className='reviews-right-side'></div>
            </div>
            <div className='product-comments'>
                <div className='comment-stars'></div>
                <div className='comment-customer'></div>
                <div className='comment-content'></div>
                <div className='comment-show-detail'></div>
            </div>
            <div className='product-recommend'>
                <div className='recommend-title'></div>
                <div className='recommend-detail'></div>
            </div>
        </div>
    );
};

export default ProductBody;
