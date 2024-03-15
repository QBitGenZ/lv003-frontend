import { ProductData } from "../common/json/ProductData";
import SummaryCartItem from "./SummaryCartItem";
import "./SummaryCart.css";

const SummaryCart = () => {
    return (
        <div id='SummaryCart'>
            <div className='summary-cart-title'>Giỏ hàng của bạn</div>
            <div className='summary-cart-body'>
                {ProductData.map((product, index) => {
                    if (index < 3) {
                        return <SummaryCartItem product={product} />;
                    }
                })}
            </div>
        </div>
    );
};

export default SummaryCart;