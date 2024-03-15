import { useState } from "react";
import CurrencyFormat from "react-currency-format";

const PaymentMethod = ({ paymentMethod, handleClicked }) => {
    const [currentPaymentMethod, setCurrentPaymentMethod] =
        useState(paymentMethod);

    const handleChangeMethod = (event) => {
        setCurrentPaymentMethod(event.target.classList.item(0));
    };

    return (
        <div id='PaymentMethod'>
            <div className='payment-method-title'>Hình thức thanh toán</div>
            <div className='payment-method-body'>
                <div className='method-choice'>
                    <div
                        className={
                            "cod payment-method-cod " +
                            (currentPaymentMethod === "cod" ? "enable" : "")
                        }
                        onClick={handleChangeMethod}>
                        COD
                        <br /> (Thanh toán khi nhận hàng)
                    </div>
                    <div
                        className={
                            "online payment-method-online " +
                            (currentPaymentMethod === "online" ? "enable" : "")
                        }
                        onClick={handleChangeMethod}>
                        Thanh toán trực tuyến <br /> (Thông qua VNPay)
                        <CurrencyFormat
                            value={2456981}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={" vnd"}
                            renderText={(value) => <div>{value}</div>}
                        />
                    </div>
                </div>
                <div
                    className='button confirm-payment-btn'
                    onClick={handleClicked}>
                    Thanh toán
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
