import { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";

const OrderSummary = ({ setTotalPrice }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_IP}/v1/carts`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setProducts(data?.data?.items))
            .catch((error) => console.log(error));
    }, []);

    var price = 0;
    products.map((product) => {
        price += product?.product?.price * product?.quantity;
    });

    setTotalPrice(price + price * 0.1 + 25000);
    localStorage.setItem("totalPrice", price + price * 0.1 + 25000);

    return (
        <div id='OrderSummary'>
            <div className='order-summary-header'>Tóm tắt đơn hàng</div>
            <div className='order-summary-body'>
                <div className='order-product-price'>
                    Tiền sản phẩm{" "}
                    <span className='order-price'>
                        <CurrencyFormat
                            value={price}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={"VND"}
                            renderText={(value) => <div>{value}</div>}
                        />
                    </span>
                </div>
                <div className='order-tax'>
                    Thuế{" "}
                    <span className='order-price'>
                        <CurrencyFormat
                            value={price * 0.1}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={"VND"}
                            renderText={(value) => <div>{value}</div>}
                        />
                    </span>
                </div>
                <div className='order-shipment'>
                    Phí giao hàng <span className='order-price'>25.000vnd</span>
                </div>
                <div className='order-voucher'>
                    Voucher <span className='order-price'>0vnd</span>
                </div>
            </div>
            <div className='order-summary-footer'>
                Tổng đơn hàng{" "}
                <span className='order-price'>
                    <CurrencyFormat
                        value={price + price * 0.1 + 25000}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={"VND"}
                        renderText={(value) => <div>{value}</div>}
                    />
                </span>
            </div>
        </div>
    );
};

export default OrderSummary;
