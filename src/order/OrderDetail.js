import { useState } from "react";
import CartDetail from "../cart/CartDetail";
import CurrencyFormat from "react-currency-format";

const OrderDetail = ({ order }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState("");

    return (
        <div id='OrderDetail'>
            <div className='order-detail-body-container'>
                <div className='order-address'>
                    <div className='address-title'>Địa chỉ nhận hàng</div>
                    <div className='address-customer-name'>
                        Người nhận
                        <span>{order?.user?.fullname}</span>
                    </div>
                    <div className='address-customer-phone'>
                        Số điện thoại
                        <span>{order?.user?.phone}</span>
                    </div>
                    <div className='customer-address'>
                        Địa chỉ
                        <span>{order?.address}</span>
                    </div>
                </div>
                <div className='order-detail-body'>
                    <div className='ordered-product'>
                        {order?.items?.map((product) => (
                            <CartDetail item={product} isInCart={false} />
                        ))}
                    </div>
                    <div className='ordered-price'>
                        <div className='products-price'>
                            Tiền sản phẩm
                            <span>
                                <CurrencyFormat
                                    value={parseInt(
                                        localStorage.getItem("totalPrice")
                                    )}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={"VND"}
                                    renderText={(value) => <div>{value}</div>}
                                />
                            </span>
                        </div>
                        <div className='tax'>
                            Thuế
                            <span>
                                <CurrencyFormat
                                    value={
                                        parseInt(
                                            localStorage.getItem("totalPrice")
                                        ) * 0.1
                                    }
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={"VND"}
                                    renderText={(value) => <div>{value}</div>}
                                />
                            </span>
                        </div>
                        <div className='shipment-price'>
                            Phí giao hàng
                            <span>
                                <CurrencyFormat
                                    value={25000}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={"VND"}
                                    renderText={(value) => <div>{value}</div>}
                                />
                            </span>
                        </div>
                        <div className='voucher'>
                            voucher
                            <span>
                                <CurrencyFormat
                                    value={0}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={"VND"}
                                    renderText={(value) => <div>{value}</div>}
                                />
                            </span>
                        </div>
                        <div className='total-price'>
                            Tổng đơn hàng
                            <span>
                                <CurrencyFormat
                                    value={
                                        parseInt(
                                            localStorage.getItem("totalPrice")
                                        ) +
                                        parseInt(
                                            localStorage.getItem("totalPrice")
                                        ) *
                                            0.1 +
                                        25000
                                    }
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={"VND"}
                                    renderText={(value) => <div>{value}</div>}
                                />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='order-detail-payment-method'>
                    <div className='payment-method-title'>
                        Phương thức thanh toán
                    </div>
                    <div className='payment-method-content'>
                        Thanh toán khi nhận hàng
                    </div>
                </div>
            </div>

            <div className='order-detail-button-container'>
                <button className='paid-btn'>Đã nhận hàng</button>
                <button className='review-btn'>Đánh giá</button>
            </div>
        </div>
    );
};

export default OrderDetail;
