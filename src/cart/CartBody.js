// CartBody.js
import { useLayoutEffect, useState } from "react";
import CartDetail from "./CartDetail";
import { Link } from "react-router-dom";

const CartBody = () => {
    const [carts, setCarts] = useState([]);

    const [selectedItems, setSelectedItems] = useState({});

    const [paymentMethod, setPaymentMethod] = useState("");
    const [deliveryMethod, setDeliveryMethod] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState();
    const [selectAll, setSelectAll] = useState(false);


    useLayoutEffect(() => getData(), []);

    function getData() {
        fetch(`${process.env.REACT_APP_IP}/v1/carts`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {

                setCarts(data?.data?.items);
                // Khởi tạo trạng thái của các checkbox
                const initialSelectedItems = data?.data?.items.reduce((acc, item) => {
                    acc[item._id] = false;
                    return acc;
                }, {});
                setSelectedItems(initialSelectedItems);

            })
            .catch((error) => console.log(error));
    }

    function deleteItem(id) {
        fetch(`${process.env.REACT_APP_IP}/v1/carts/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then(() => getData())
            .catch((error) => console.log(error));
    }

    function updateData(id, quantity) {
        fetch(`${process.env.REACT_APP_IP}/v1/carts/${id}`, {
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


    const handleCheckboxChange = (itemId) => {
        setSelectedItems((prevSelectedItems) => ({
            ...prevSelectedItems,
            [itemId]: !prevSelectedItems[itemId],
        }));
    };


    return (
        <div id='CartBody'>
            <div className='cart-title'>Giỏ hàng của bạn</div>
            <div className='body-container'>
                {carts?.length > 0 ? (
                    carts?.map((item) => {
                        return (
                            <CartDetail
                                key={item._id}
                                item={item}
                                isInCart={true}
                                deleteItem={deleteItem}
                                updateData={updateData}
                                selected={selectedItems[item._id]}
                                onCheckboxChange={handleCheckboxChange}
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
                <div
                    className='button choose-all-btn'
                    onClick={() => {

                        const allSelected = Object.values(selectedItems).every((isSelected) => isSelected);
                        const updatedSelectedItems = carts.reduce((acc, item) => {
                            acc[item._id] = !allSelected;
                            return acc;
                        }, {});
                        setSelectedItems(updatedSelectedItems);
                    }}>
                    Chọn tất cả
                </div>

                <Link
                    to={"/checkout"}
                    className='button checkout-btn'
                    onClick={() => {
                        localStorage.setItem(
                            "cart",
                            JSON.stringify(
                                carts.filter((item) => item.selected)
                            )
                        );
                    }}>

                    Mua hàng
                </Link>
            </div>
        </div>
    );
};

export default CartBody;