import CurrencyFormat from "react-currency-format";

const UserOrder = ({ order }) => {
    let isDelivering = false;

    if (order.status != "Đã giao hàng") isDelivering = true;

    var orderCost = 0;
    order?.items?.map((item) => {
        orderCost += item?.product?.price * item?.quantity;
    });

    // Chuyển đổi sang đối tượng Date
    const dateObj = new Date(order.created_at);

    // Định dạng lại thời gian
    const formattedDate = `${dateObj.getDate()}/${
        dateObj.getMonth() + 1
    }/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;

    return (
        isDelivering && (
            <div className='UserOrder'>
                <div className='order-number'>Đơn hàng #{order._id}</div>
                <div className='order-body-container'>
                    <div className='order-date'>
                        Ngày đặt hàng {formattedDate}
                    </div>
                    <div className='order-status'>
                        {order.status}
                    </div>
                </div>
                <div className='order-cost'>
                    Tổng đơn hàng{" "}
                    {
                        <CurrencyFormat
                            value={orderCost + orderCost * 0.1 + 25000}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={"VND"}
                            renderText={(value) => <div>{value}</div>}
                        />
                    }
                </div>
            </div>
        )
    );
};

export default UserOrder;
