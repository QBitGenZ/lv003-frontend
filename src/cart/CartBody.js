import CartDetail from "./CartDetail";
import { ProductData } from "../common/json/ProductData";

const CartBody = () => {
    return (
        <div id='CartBody'>
            <div className='cart-title'>Giỏ hàng của bạn</div>
            <div className='body-container'>
                {ProductData.map((value, index) => {
                    if (index < 3) return <CartDetail product={value} />;
                })}
            </div>
            <div className='button-container'>
                <div className='button remove-all-btn'>Xóa tất cả</div>
                <div className='button choose-all-btn'>Chọn tất cả</div>
                <div className='button checkout-btn'>Mua hàng</div>
            </div>
        </div>
    );
};

export default CartBody;
