import Header from "../common/Header";
import Footer from "../common/Footer";
import CheckoutProgress from "./CheckoutProgress";
import DeliveryOptions from "./DeliverryOptions";
import DeliveryAddress from "./DeliveryAddress";
import OrderSummary from "./OrderSummary";
import SummaryCart from "../common/SummaryCart";

const Checkout = () => {
    return (
        <div id='Checkout'>
            <Header />
            <CheckoutProgress currentProgress={"delivery"} />
            <div className='checkout-haft-top'>
                <DeliveryOptions deliveryOptions={"GHTK"} />
                <OrderSummary />
            </div>
            <div className='checkout-haft-bot'>
                <DeliveryAddress />
                <SummaryCart />
            </div>
            <Footer />
        </div>
    );
};

export default Checkout;
