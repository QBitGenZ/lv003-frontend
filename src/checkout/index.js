import Header from "../common/Header";
import Footer from "../common/Footer";
import CheckoutProgress from "./CheckoutProgress";
import { useEffect, useState } from "react";
import SearchBody from "../common/SearchBody";
import CheckoutBody from "./CheckoutBody";

const Checkout = ({ step }) => {
    const [isShowSearch, setIsShowSearch] = useState(false);

    const stepList = ["delivery", "payment", "confirmation"];

    const [currentStep, setCurrentStep] = useState(step);

    const handleChangeCurrentStep = () => {
        setCurrentStep(getNextStep(stepList, currentStep));
    };

    const getNextStep = (list, currentStep) => {
        let currentIndex = stepList.indexOf(currentStep);
        if (currentIndex === -1 || currentIndex === list.length - 1) {
            return null;
        }
        return list[currentIndex + 1];
    };

    useEffect(() => {}, [currentStep]);

    if (currentStep === "delivery") {
        return (
            <div id='Checkout'>
                <Header
                    isShowSearch={isShowSearch}
                    setIsShowSearch={setIsShowSearch}
                />
                {isShowSearch ? (
                    <SearchBody setIsShowSearch={setIsShowSearch} />
                ) : (
                    <>
                        <CheckoutProgress currentProgress={"delivery"} />
                        <CheckoutBody
                            currentStep={"delivery"}
                            setCurrentStep={handleChangeCurrentStep}
                        />
                        <Footer />
                    </>
                )}
            </div>
        );
    } else if (currentStep === "payment") {
        return (
            <div id='Checkout'>
                <Header
                    isShowSearch={isShowSearch}
                    setIsShowSearch={setIsShowSearch}
                />
                {isShowSearch ? (
                    <SearchBody setIsShowSearch={setIsShowSearch} />
                ) : (
                    <>
                        <CheckoutProgress currentProgress={"payment"} />
                        <CheckoutBody
                            currentStep={"payment"}
                            setCurrentStep={handleChangeCurrentStep}
                        />
                        <Footer />
                    </>
                )}
            </div>
        );
    } else {
        return (
            <div id='Checkout'>
                <Header
                    isShowSearch={isShowSearch}
                    setIsShowSearch={setIsShowSearch}
                />
                {isShowSearch ? (
                    <SearchBody setIsShowSearch={setIsShowSearch} />
                ) : (
                    <>
                        <CheckoutProgress currentProgress={"confirmation"} />
                        <CheckoutBody
                            currentStep={"checkout"}
                            setCurrentStep={handleChangeCurrentStep}
                        />
                        <Footer />
                    </>
                )}
            </div>
        );
    }
};

export default Checkout;
