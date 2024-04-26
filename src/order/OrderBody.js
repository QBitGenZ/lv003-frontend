import { useEffect, useLayoutEffect, useState } from "react";
import OrderStatus from "./OrderStatus";
import OrderDetail from "./OrderDetail";

const OrderBody = ({ order, status }) => {
    return (
        <div id='OrderBody'>
            <div className='order-title'>Đơn hàng của bạn</div>
            {/* <OrderStatus status={status} /> */}
            <OrderDetail order={order} />
        </div>
    );
};

export default OrderBody;
