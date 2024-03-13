import CartDetail from "../cart/CartDetail";
import { ProductData } from "../common/json/ProductData";

const OrderDetail = () => {
    return (
        <div id='OrderDetail'>
            <div className='order-detail-body-container'>
                <div className='order-address'>
                    <div className='address-title'>Địa chỉ nhận hàng</div>
                    <div className='address-customer-name'>
                        Người nhận
                        <span>Hồ Nhĩ Khang</span>
                    </div>
                    <div className='address-customer-phone'>
                        Số điện thoại
                        <span>09999999</span>
                    </div>
                    <div className='customer-address'>
                        Địa chỉ
                        <span>
                            Số nhà 54, Hẻm 51, Đường 3/2, Phường Xuân Khánh,
                            Quân Ninh Kiều, Thành Phố Cần Thơ
                        </span>
                    </div>
                </div>
                <div className='order-detail-body'>
                    <div className='ordered-product'>
                        {ProductData.map((product) => (
                            <CartDetail product={product} isInCart={false} />
                        ))}
                    </div>
                    <div className='ordered-price'>
                        <div className='products-price'>
                            Tiền sản phẩm
                            <span>1.989.000vnd</span>
                        </div>
                        <div className='tax'>
                            Thuế
                            <span>100.000vnd</span>
                        </div>
                        <div className='shipment-price'>
                            Phí giao hàng
                            <span>25.000vnd</span>
                        </div>
                        <div className='voucher'>
                            voucher
                            <span>25.000vnd</span>
                        </div>
                        <div className='total-price'>
                            Tổng đơn hàng
                            <span>2.024.000vnd</span>
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
                <div className='button paid-btn'>Đã nhận hàng</div>
                <div className='button review-btn'>Xem đánh giá</div>
            </div>
        </div>
    );
};

export default OrderDetail;
