import { useEffect, useLayoutEffect, useState } from "react";
import CartDetail from "./CartDetail";
import { Link, useNavigate } from "react-router-dom";

const CartBody = () => {
    const [carts, setCarts] = useState([]);

    const [selectedItems, setSelectedItems] = useState({});

    const [paymentMethod, setPaymentMethod] = useState("");
    const [deliveryMethod, setDeliveryMethod] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState();
    const [selectAll, setSelectAll] = useState(true)
    const history = useNavigate()

    useLayoutEffect(() => getData(), []);
    useEffect(() => {
        localStorage.removeItem('cart')
    }, [])

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
                
                const items = data?.data?.items?.map(item => {
                    return {
                        ...item,
                        selected: false
                    }
                })
                // setCarts(data?.data?.items);
                setCarts(items)
                // setSelectAll(false)
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

    function updateSelectedStatus(id, selected) {
        console.log(id, selected)
        const updatedCarts = carts.map((cartItem) => {
            if (cartItem._id === id) {
                // Tạo một bản sao của đối tượng và thay đổi thuộc tính selected
                const updatedCartItem = { ...cartItem, selected };
                return updatedCartItem;
            }
            return cartItem;
        });
        setCarts(updatedCarts);
    }

    const handleBuyNowClick = (e) => {
        e.preventDefault(); 

        const selectedItem = carts.filter(item => item.selected)
        
        if(selectedItem.length <= 0) {
            return alert('Vui lòng chọn sản phẩm')
        }
        localStorage.setItem('cart', JSON.stringify(selectedItem));
        history('/checkout');
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
            <div className='button choose-all-btn' onClick={() => {
               
                const updatedCarts = carts.map((cartItem) => {
                    const updatedCartItem = { ...cartItem, selected: selectAll };
                    return updatedCartItem;
               })
               setSelectAll(!selectAll);
               setCarts(updatedCarts);
            }}>Chọn tất cả</div> 
                <Link to={"#"} className='button checkout-btn' onClick={handleBuyNowClick}>
                    Mua hàng
                </Link>
            </div>
        </div>
    );
};

export default CartBody;