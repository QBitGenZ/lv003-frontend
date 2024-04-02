import DeliveryOptions from "./DeliverryOptions";
import DeliveryAddress from "./DeliveryAddress";
import OrderSummary from "./OrderSummary";
import SummaryCart from "../common/SummaryCart";
import PaymentMethod from "./PaymentMethod";
import ConfirmationCheckout from "./ConfirmationCheckout";
import { useEffect, useState } from "react";

const CheckoutBody = ({ currentStep, setCurrentStep }) => {
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [deliveryOPtions, setDeliveryOPtions] = useState("GHTK");
    const [address, setAddress] = useState({
        recipientName: "",
        phoneNumber: "",
        provinceCity: "",
        district: "",
        ward: "",
        detailAddress: "",
        isDefaultAddress: false,
    });
    const [cartItems, setCartItems] = useState([]);
    const [orders, setOrders] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => getCartItems(), []);

    const getCartItems = () => {
        fetch(`${process.env.REACT_APP_IP}/v1/carts`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                const items = data?.data?.items;
                setCartItems(
                    items.map((value) => {
                        return {
                            product: value?.product?._id,
                            quantity: value?.quantity,
                        };
                    })
                );
            })
            .catch((error) => {
                console.log(error);
                alert("Lỗi! Vui lòng thử lại");
            });
    };

    const postData = () => {
        const {
            recipientName,
            phoneNumber,
            provinceCity,
            district,
            ward,
            detailAddress,
        } = address;

        fetch(`${process.env.REACT_APP_IP}/v1/orders`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
                paymentMethod: paymentMethod,
                deliveryMethod: deliveryOPtions,
                address: `${recipientName}; ${phoneNumber}; ${detailAddress}, ${ward}, ${district}, ${provinceCity}`,
                items: cartItems,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setOrders(data?.data);
                alert("Mua hàng thành công");
            })
            .catch((error) => {
                console.log("error: " + error);
                alert("Lỗi! Vui lòng thử lại");
            });
    };

    if (currentStep === "delivery") {
        return (
            <div id='CheckoutBody'>
                <div className='checkout-haft-top'>
                    <DeliveryOptions
                        deliveryOptions={deliveryOPtions}
                        setDeliveryOptions={setDeliveryOPtions}
                    />
                    <OrderSummary setTotalPrice={setTotalPrice} />
                </div>
                <div className='checkout-haft-bot'>
                    {currentStep === "confirmation" ? (
                        <DeliveryAddress
                            handleClickedEvent={null}
                            address={address}
                            setAddress={setAddress}
                        />
                    ) : (
                        <DeliveryAddress
                            handleClickedEvent={setCurrentStep}
                            address={address}
                            setAddress={setAddress}
                        />
                    )}
                    <SummaryCart />
                </div>
            </div>
        );
    } else if (currentStep === "payment") {
        return (
            <div id='CheckoutBody' className='in-payment'>
                <div className='checkout-haft-top'>
                    <OrderSummary setTotalPrice={setTotalPrice} />
                    <SummaryCart />
                </div>
                <div className='checkout-haft-bot'>
                    <PaymentMethod
                        paymentMethod={paymentMethod}
                        handleClicked={setCurrentStep}
                        setPaymentMethod={setPaymentMethod}
                        onSubmit={postData}
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div id='CheckoutBody'>
                <div className='checkout-haft-top'>
                    <ConfirmationCheckout
                        order={orders}
                        totalPrice={totalPrice}
                    />
                    <OrderSummary setTotalPrice={setTotalPrice} />
                </div>
            </div>
        );
    }
};

export default CheckoutBody;
