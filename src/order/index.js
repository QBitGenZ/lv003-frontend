import Header from "../common/Header";
import Footer from "../common/Footer";
import OrderBody from "./OrderBody";
import { OrderStatus } from "../common/json/OrderStatus";
import "./Order.css";

const Order = () => {
    return (
        <div id='Order'>
            <Header />
            <OrderBody status={OrderStatus} />
            <Footer />
        </div>
    );
};

export default Order;
