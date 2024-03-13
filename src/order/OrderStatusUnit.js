const OrderStatusUnit = ({ status }) => {
    return (
        <div id='OrderStatusUnit'>
            <div className='order-status-unit-icon'>
                <img src={process.env.PUBLIC_URL + status.icon}></img>
            </div>
            <div className='order-status-unit-content'>{status.content}</div>
            <div className='order-status-unit-date'>{status.date}</div>
        </div>
    );
};

export default OrderStatusUnit;
