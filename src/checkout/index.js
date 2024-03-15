import Header from "../common/Header";
import Footer from "../common/Footer";
import CheckoutProgress from "./CheckoutProgress";
import DeliveryOptions from "./DeliverryOptions";
import DeliveryAddress from "./DeliveryAddress";
import OrderSummary from "./OrderSummary";
import SummaryCart from "../common/SummaryCart";
import PaymentMethod from "./PaymentMethod";
import { useEffect, useState } from "react";
import ConfirmationCheckout from "./ConfirmationCheckout";

const Checkout = ({ step }) => {
    const stepList = ["delivery", "payment", "confirmation"];

    const [currentStep, setCurrentStep] = useState(step);

    const getNextStep = (list, currentStep) => {
        let currentIndex = stepList.indexOf(currentStep);
        if (currentIndex === -1 || currentIndex === list.length - 1) {
            return null;
        }
        return list[currentIndex + 1];
    };

    const handleChangeCurrentStep = () => {
        setCurrentStep(getNextStep(stepList, currentStep));
        console.log(currentStep);
    };

    useEffect(() => {}, [currentStep]);

    return (
        <div id='Checkout'>
            <Header />
            {currentStep === "delivery" ? (
                <CheckoutProgress currentProgress={"delivery"} />
            ) : null}
            {currentStep === "payment" ? (
                <CheckoutProgress currentProgress={"payment"} />
            ) : null}
            {currentStep === "confirmation" ? (
                <CheckoutProgress currentProgress={"confirmation"} />
            ) : null}

            <div className='checkout-haft-top'>
                {currentStep === "delivery" ? (
                    <DeliveryOptions deliveryOptions={"GHTK"} />
                ) : null}
                {currentStep === "payment" ? (
                    <PaymentMethod
                        paymentMethod={"cod"}
                        handleClicked={handleChangeCurrentStep}
                    />
                ) : null}
                {currentStep === "confirmation" ? (
                    <ConfirmationCheckout />
                ) : null}
                <OrderSummary />
            </div>
            {currentStep === "delivery" ? (
                <div className='checkout-haft-bot'>
                    {currentStep === "confirmation" ? (
                        <DeliveryAddress handleClickedEvent={null} />
                    ) : (
                        <DeliveryAddress
                            handleClickedEvent={handleChangeCurrentStep}
                        />
                    )}
                    <SummaryCart />
                </div>
            ) : null}
            <Footer />
        </div>
    );
};

export default Checkout;
