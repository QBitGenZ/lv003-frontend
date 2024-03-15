const UserOrder = ({ order }) => {
    let isDelivering = false;

    if (order.orderStatus === "Đang giao hàng") isDelivering = true;

    return (
        isDelivering && (
            <div className='UserOrder'>
                <div className='order-number'>Đơn hàng {order.orderNumber}</div>
                <div className='order-body-container'>
                    <div className='order-date'>
                        Ngày đặt hàng {order.orderDate}
                    </div>
                    <div className='order-status'>
                        Trạng thái {order.orderStatus}
                    </div>
                </div>
                <div className='order-cost'>
                    Tổng đơn hàng {order.orderCost}
                </div>
            </div>
        )
    );
};

export default UserOrder;
