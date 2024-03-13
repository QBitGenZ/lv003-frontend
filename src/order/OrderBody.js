import OrderStatus from "./OrderStatus";
import OrderDetail from "./OrderDetail";

const OrderBody = ({ status }) => {
    return (
        <div id='OrderBody'>
            <div className='order-title'>Đơn hàng của bạn</div>
            <OrderStatus status={status} />
            <OrderDetail />
        </div>
    );
};

export default OrderBody;
