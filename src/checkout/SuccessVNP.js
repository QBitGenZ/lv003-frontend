import CurrencyFormat from "react-currency-format";
import "./Success.css";
import { useEffect, useState } from "react";
import Header from "../common/Header";

const SuccessVNP = ({ totalPrice }) => {
    const [order, setOrder] = useState({});
    totalPrice = parseInt(localStorage.getItem("totalPrice"));

    const dbDate = order?.created_at;
    // Chuyển đổi sang đối tượng Date
    const dateObj = new Date(dbDate);

    // Định dạng lại thời gian
    const formattedDate = `${dateObj.getDate()}/${
        dateObj.getMonth() + 1
    }/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;

    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_IP}/v1/orders/${localStorage.getItem(
                "orderId"
            )}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setOrder(data?.data);
            })
            .catch((err) => console.log(err));
    }, []);

    let total = 0;

    return (
        <>
            <Header />
            <div id='SuccessVNP'>
                <div className='confirm-infor'>
                    <div className='confirm-infor-title'>
                        Xác nhận thông tin
                    </div>
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
                            <th>Đơn giá</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                        </tr>
                        {order?.items?.map((item) => {
                            total += item?.product?.price * item?.quantity;
                            return (
                                <tr>
                                    <td style={{ width: "45%" }}>
                                        {item?.product?.name}
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        {item?.product?.price}
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        {item?.quantity}
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        {item?.product?.price * item?.quantity}
                                    </td>
                                </tr>
                            );
                        })}
                        <tr className='confirm-receipt-tax'>
                            <td colSpan={2}>Thuế</td>
                            <td colSpan={2}>
                                <CurrencyFormat
                                    value={total * 0.1}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={"VND"}
                                    renderText={(value) => <div>{value}</div>}
                                />
                            </td>
                        </tr>
                        <tr className='confirm-receipt-shipment'>
                            <td colSpan={2}>Phí giao hàng</td>
                            <td colSpan={2}>
                                <CurrencyFormat
                                    value={total ? 25000 : 0}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={"VND"}
                                    renderText={(value) => <div>{value}</div>}
                                />
                            </td>
                        </tr>
                        <tr className='confirm-receipt-total'>
                            <td colSpan={2}>Tổng hóa đơn</td>
                            <td colSpan={2}>
                                <CurrencyFormat
                                    value={
                                        total +
                                        total * 0.1 +
                                        (total ? 25000 : 0)
                                    }
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    suffix={"VND"}
                                    renderText={(value) => <div>{value}</div>}
                                />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
};

export default SuccessVNP;