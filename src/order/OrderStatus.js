import OrderStatusUnit from "./OrderStatusUnit";

const OrderStatus = ({ status }) => {
    return (
        <div id='OrderStatus'>
            {status.map((status) => (
                <OrderStatusUnit status={status} />
            ))}
        </div>
    );
};

export default OrderStatus;
