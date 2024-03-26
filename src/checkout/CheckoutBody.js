import DeliveryOptions from "./DeliverryOptions";
import DeliveryAddress from "./DeliveryAddress";
import OrderSummary from "./OrderSummary";
import SummaryCart from "../common/SummaryCart";
import PaymentMethod from "./PaymentMethod";
import ConfirmationCheckout from "./ConfirmationCheckout";

const CheckoutBody = ({ currentStep, setCurrentStep }) => {
    const postData = () => {
        fetch("http://localhost:3000/v1/carts", {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
                user: "65fc70b131da26ffabb2977a",
                paymentMethod: "",
            }),
        });
    };

    if (currentStep === "delivery") {
        return (
            <div id='CheckoutBody'>
                <div className='checkout-haft-top'>
                    <DeliveryOptions deliveryOptions={"GHTK"} />
                    <OrderSummary />
                </div>
                <div className='checkout-haft-bot'>
                    {currentStep === "confirmation" ? (
                        <DeliveryAddress handleClickedEvent={null} />
                    ) : (
                        <DeliveryAddress handleClickedEvent={setCurrentStep} />
                    )}
                    <SummaryCart />
                </div>
            </div>
        );
    } else if (currentStep === "payment") {
        return (
            <div id='CheckoutBody' className='in-payment'>
                <div className='checkout-haft-top'>
                    <OrderSummary />
                    <SummaryCart />
                </div>
                <div className='checkout-haft-bot'>
                    <PaymentMethod
                        paymentMethod={"cod"}
                        handleClicked={setCurrentStep}
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div id='CheckoutBody'>
                <div className='checkout-haft-top'>
                    <ConfirmationCheckout />
                    <OrderSummary />
                </div>
            </div>
        );
    }
};

export default CheckoutBody;
