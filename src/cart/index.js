import Header from "../common/Header";
import Footer from "../common/Footer";
import CartBody from "./CartBody";
import "./Cart.css";

const Cart = () => {
    return (
        <div id='Cart'>
            <Header />
            <CartBody />
            <Footer />
        </div>
    );
};

export default Cart;
