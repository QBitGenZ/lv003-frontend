import { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";

const OrderSummary = ({ order }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        setProducts(cart);
    }, []);

    return (
        <div id='OrderSummary'>
            <div className='order-summary-header'>Tóm tắt đơn hàng</div>
            <div className='order-summary-body'>
                <div className='order-product-price'>
                    Tiền sản phẩm{" "}
                    <span className='order-price'>
                        <CurrencyFormat
                            value={order?.totalPrice - 25000}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={"VND"}
                            renderText={(value) => <div>{value}</div>}
                        />
                    </span>
                </div>
                <div className='order-shipment'>
                    Phí giao hàng{" "}
                    <span className='order-price'>
                        <CurrencyFormat
                            value={25000}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={"VND"}
                            renderText={(value) => <div>{value}</div>}
                        />
                    </span>
                </div>
                <div className='order-voucher'>
                    Voucher <span className='order-price'>0vnd</span>
                </div>
            </div>
            <div className='order-summary-footer'>
                Tổng đơn hàng{" "}
                <span className='order-price'>
                    <CurrencyFormat
                        value={order?.totalPrice}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={"VND"}
                        renderText={(value) => <div>{value}</div>}
                    />
                </span>
            </div>
        </div>
    );
};

export default OrderSummary;
