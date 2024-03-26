import { useLayoutEffect, useState } from "react";
import CartDetail from "./CartDetail";
import { Link } from "react-router-dom";

const CartBody = () => {
    const [carts, setCarts] = useState([]);

    const [paymentMethod, setPaymentMethod] = useState("");
    const [deliveryMethod, setDeliveryMethod] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState();

    useLayoutEffect(() => getData(), []);

    function getData() {
        fetch("http://localhost:3000/v1/carts", {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setCarts(data?.data?.items);
                console.log("test: " + carts);
            })
            .catch((error) => console.log(error));
    }

    function deleteItem(id) {
        fetch(`http://localhost:3000/v1/carts/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then(() => getData())
            .catch((error) => console.log(error));
    }

    function updateData(id, productId, quantity) {
        console.log(productId);
        fetch(`http://localhost:3000/v1/carts/${id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                quantity: quantity,
            }),
        })
            .then((res) => res.json)
            .catch((error) => console.log(error));
    }

    return (
        <div id='CartBody'>
            <div className='cart-title'>Giỏ hàng của bạn</div>
            <div className='body-container'>
                {carts.length > 0 ? (
                    carts?.map((item) => {
                        return (
                            <CartDetail
                                item={item}
                                isInCart={true}
                                deleteItem={deleteItem}
                                updateData={updateData}
                            />
                        );
                    })
                ) : (
                    <div id='no-product'>
                        Bạn chưa mua gì, hãy đến xem{" "}
                        <Link to={"/products"}>sản phẩm</Link> ngay
                    </div>
                )}
            </div>
            <div className='button-container'>
                <div className='button choose-all-btn'>Chọn tất cả</div>
                <Link to={"/checkout"} className='button checkout-btn'>
                    Mua hàng
                </Link>
            </div>
        </div>
    );
};

export default CartBody;
