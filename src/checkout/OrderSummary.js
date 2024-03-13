const OrderSummary = () => {
    return (
        <div id='OrderSummary'>
            <div className='order-summary-header'>Tóm tắt đơn hàng</div>
            <div className='order-summary-body'>
                <div className='order-product-price'>
                    Tiền sản phẩm
                    <span className='order-price'>1.989.000vnd</span>
                </div>
                <div className='order-tax'>
                    Thuế
                    <span className='order-price'>100.000vnd</span>
                </div>
                <div className='order-shipment'>
                    Phí giao hàng
                    <span className='order-price'>25.000vnd</span>
                </div>
                <div className='order-voucher'>
                    Voucher
                    <span className='order-price'>0vnd</span>
                </div>
            </div>
            <div className='order-summary-footer'>
                Tổng đơn hàng
                <span className='order-price'>2.024.000vnd</span>
            </div>
        </div>
    );
};

export default OrderSummary;
