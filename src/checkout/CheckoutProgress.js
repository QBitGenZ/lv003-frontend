import "./Checkout.css";

const CheckoutProgress = ({ currentProgress }) => {
    return (
        <div id='CheckoutProgress'>
            <div
                className={
                    "delivery-progress " +
                    (currentProgress === "delivery" ? "enable" : "")
                }>
                Vận chuyển
            </div>
            <div
                className={
                    "payment-progress " +
                    (currentProgress === "payment" ? "enable" : "")
                }>
                Thanh toán
            </div>
            <div
                className={
                    "confirmation-progress " +
                    (currentProgress === "confirmation" ? "enable" : "")
                }>
                Xác nhận
            </div>
        </div>
    );
};

export default CheckoutProgress;
