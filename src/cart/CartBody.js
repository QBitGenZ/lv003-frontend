import CartDetail from "./CartDetail";
import { ProductData } from "../common/json/ProductData";
import { Link } from "react-router-dom";

const CartBody = () => {
    return (
        <div id='CartBody'>
            <div className='cart-title'>Giỏ hàng của bạn</div>
            <div className='body-container'>
                {ProductData.map((value, index) => {
                    if (index < 3)
                        return <CartDetail product={value} isInCart={true} />;
                })}
            </div>
            <div className='button-container'>
                <div className='button remove-all-btn'>Xóa tất cả</div>
                <div className='button choose-all-btn'>Chọn tất cả</div>
                <Link to={"/checkout"} className='button checkout-btn'>
                    Mua hàng
                </Link>
            </div>
        </div>
    );
};

export default CartBody;
