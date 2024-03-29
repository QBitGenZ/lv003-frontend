import { useEffect } from "react";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";

const ConfirmationCheckout = ({ order, totalPrice }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        order?.items?.map((item) => {
            fetch(`${process.env.REACT_APP_IP}/v1/products/${item?.product}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setProducts([...products, data?.data]);
                })
                .catch((error) => console.log(error));
        });
    }, []);

    const dbDate = order?.created_at;
    // Chuyển đổi sang đối tượng Date
    const dateObj = new Date(dbDate);

    // Định dạng lại thời gian
    const formattedDate = `${dateObj.getDate()}/${
        dateObj.getMonth() + 1
    }/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;

    return (
        <div id='ConfirmationCheckout'>
            <div className='confirm-infor'>
                <div className='confirm-infor-title'>Xác nhận thông tin</div>
                <div className='confirm-infor-body'>
                    <p className='order-code-infor'>
                        Bạn đã đặt thành công đơn hàng #{order?._id}
                    </p>
                    <p className='order-price-infor'>
                        Tổng số tiền:{" "}
                        <CurrencyFormat
                            value={
                                totalPrice +
                                totalPrice * 0.1 +
                                (totalPrice ? 25000 : 0)
                            }
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={"VND"}
                            renderText={(value) => <div>{value}</div>}
                        />
                    </p>
                    <p className='order-msg-infor'>
                        Bạn sẽ sớm nhận được đơn hàng
                    </p>
                </div>
            </div>
            <div className='confirm-receipt'>
                <div className='confirm-receipt-title'>Hóa đơn</div>
                <div className='confirm-receipt-header'>
                    <p className='receipt-time'>
                        Thời gian lập hóa đơn:
                        <span>{formattedDate}</span>
                    </p>
                    <p className='receipt-code'>
                        Mã hóa đơn: <span>#{order?._id}</span>
                    </p>
                    <p className='receipt-payment-method'>
                        Phương thức thanh toán:
                        <span>
                            {order?.paymentMethod === "cod"
                                ? "Thanh toán khi nhận hàng"
                                : "Thanh toán qua VNPay"}
                        </span>
                    </p>
                    <p className='receipt-address'>
                        Địa chỉ:
                        <span>{order?.address}</span>
                    </p>
                </div>
                <table className='confirm-receipt-body'>
                    <tr>
                        <td>Tên sản phẩm</td>
                        <td>Đơn giá</td>
                        <td>Số lượng</td>
                        <td>Thành tiền</td>
                    </tr>
                    {products?.map((item) => {
                        return (
                            <tr>
                                <td>{item?.name}</td>
                                <td>{item?.price}</td>
                                <td>{order?.quantity}</td>
                                <td>{item?.price * order?.quantity}</td>
                            </tr>
                        );
                    })}
                    <tr>
                        <td>Sản phẩm A</td>
                        <td>500.000vnd</td>
                        <td>2</td>
                        <td>1.000.000vnd</td>
                    </tr>
                    <tr>
                        <td>Sản phẩm A</td>
                        <td>500.000vnd</td>
                        <td>2</td>
                        <td>1.000.000vnd</td>
                    </tr>
                    <tr>
                        <td>Sản phẩm A</td>
                        <td>500.000vnd</td>
                        <td>2</td>
                        <td>1.000.000vnd</td>
                    </tr>
                    <tr className='confirm-receipt-total'>
                        <td colSpan={2}>Tổng hóa đơn</td>
                        <td colSpan={2}>3.000.000vnd</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default ConfirmationCheckout;
