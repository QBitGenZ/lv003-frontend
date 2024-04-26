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
    const [orders, setOrders] = useState();

    useEffect(() => getCartItems(), []);

    const getCartItems = () => {
        const items = JSON.parse(localStorage.getItem("cart"));

        setCartItems(
            items.map((item) => {
                return {
                    product: item.product._id,
                    price: item?.product?.price * item?.quantity,
                    quantity: item.quantity,
                };
            })
        );
    };

    const calculateTotalPrice = (cartItems) => {
        let price = 0;
        cartItems?.forEach((element) => {
            price += element?.price;
        });

        price += 25000;

        console.log(typeof price);

        return price;
    };

    const postData = async () => {
        const {
            recipientName,
            phoneNumber,
            provinceCity,
            district,
            ward,
            detailAddress,
        } = address;

        if (
            !recipientName ||
            !phoneNumber ||
            !provinceCity ||
            !district ||
            !ward ||
            !detailAddress
        ) {
            return alert("Yêu cầu nhập thông tin đầy đủ");
        }

        let statusCode;
        console.log(calculateTotalPrice(cartItems));
        await fetch(`${process.env.REACT_APP_IP}/v1/orders`, {
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
                items: cartItems.map((item) => {
                    return {
                        product: item.product,
                        quantity: item.quantity,
                    };
                }),
                totalPrice: Number.parseFloat(calculateTotalPrice(cartItems)),
            }),
        })
            .then((res) => {
                statusCode = res.status;
                if (statusCode === 201) {
                    return res.json();
                } else {
                    return Promise.reject(
                        "Đặt hàng thất bại! Vui lòng thử lại!"
                    );
                }
            })
            .then((data) => {
                setOrders(data?.data);
                console.log(data);
                localStorage.setItem("orderId", data?.data?._id);
            })
            .catch((error) => {
                alert(error);
                console.log("error: " + error);
            });

        return statusCode;
    };

    if (currentStep === "delivery") {
        return (
            <div id='CheckoutBody'>
                <div className='checkout-haft-top'>
                    <DeliveryOptions
                        deliveryOptions={deliveryOPtions}
                        setDeliveryOptions={setDeliveryOPtions}
                    />
                    {/* <OrderSummary order={orders} /> */}
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
                    {/* <OrderSummary order={orders} /> */}
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
                    <ConfirmationCheckout order={orders} />
                    {/* <OrderSummary order={orders} /> */}
                </div>
            </div>
        );
    }
};

export default CheckoutBody;
