import { useState } from "react";

const PaymentMethod = ({
    paymentMethod,
    handleClicked,
    setPaymentMethod,
    onSubmit,
}) => {
    const handleChangeMethod = (event) => {
        setPaymentMethod(event.target.classList.item(0));
    };

    const submit = () => {
        onSubmit();
        handleClicked();
    };

    return (
        <div id='PaymentMethod'>
            <div className='payment-method-title'>Hình thức thanh toán</div>
            <div className='payment-method-body'>
                <div className='method-choice'>
                    <div
                        className={
                            "cod payment-method-cod " +
                            (paymentMethod === "cod" ? "enable" : "")
                        }
                        onClick={handleChangeMethod}>
                        COD
                        <br /> (Thanh toán khi nhận hàng)
                    </div>
                    <div
                        className={
                            "online payment-method-online " +
                            (paymentMethod === "online" ? "enable" : "")
                        }
                        onClick={handleChangeMethod}>
                        Thanh toán trực tuyến <br /> (Thông qua VNPay)
                    </div>
                </div>
                <div className='button confirm-payment-btn' onClick={submit}>
                    Thanh toán
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
