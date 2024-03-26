import { useState } from "react";

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
