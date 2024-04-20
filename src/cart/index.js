import Header from "../common/Header";
import Footer from "../common/Footer";
import CartBody from "./CartBody";
import { useState } from "react";
import SearchBody from "../common/SearchBody";
import "./Cart.css";

const Cart = () => {
    const [isShowSearch, setIsShowSearch] = useState(false);

    return (
        <div id='Cart'>
            <Header
                isShowSearch={isShowSearch}
                setIsShowSearch={setIsShowSearch}
            />
            {isShowSearch ? (
                <SearchBody setIsShowSearch={setIsShowSearch} />
            ) : (
                <>
                    <CartBody />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Cart;
