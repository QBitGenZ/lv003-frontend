import { useEffect, useState } from "react";
import ChooseQuantity from "../common/ChooseQuantity";
import CurrencyFormat from "react-currency-format";

const CartDetail = ({
    item,
    isInCart,
    deleteItem,
    updateData,
    updateSelectedStatus,
}) => {
    const [quantity, setQuantity] = useState(item?.quantity);
    const [isSelected, setIsSelected] = useState(item?.selected);

    const updateCart = () => {
        isInCart && updateData(item._id, quantity);
    };

    useEffect(() => {
        setIsSelected(item?.selected);
        // updateSelectedStatus(item._id, selectAll)
    }, [item]);

    const handleRemoveButtonCliecked = () => {
        deleteItem(item?._id);
    };

    useEffect(() => {
        updateCart();
    }, [quantity]);

    if (!isInCart) {
        return (
            <div id='CartDetail' className='not-in-cart'>
                <div className='left-side-detail'>
                    <div className='cart-detail-img'>
                        <img
                            src={
                                `${process.env.REACT_APP_IP}/` +
                                item?.product?.images[0]
                            }
                            alt='product'></img>
                    </div>
                    <div className='cart-detail-body'>
                        <div className='cart-detail-prod-name'>
                            {item?.product?.name}
                        </div>
                        <div className='cart-detail-prod-brand'>
                            {item?.product?.brand?.name}
                        </div>
                        <div className='quantity'>
                            Số lượng: {item?.quantity}
                        </div>
                    </div>
                </div>
                <div className='right-side-detail'>
                    <div className='cart-detail-price'>
                        <div className='sale-price'>
                            <CurrencyFormat
                                value={item?.product?.price * item?.quantity}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={"VND"}
                                renderText={(value) => <div>{value}</div>}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div id={"CartDetail"} className={item?.product?.ProductNo}>
            <div className='left-side-detail'>
                <div className='cart-detail-choice'>
                    <input
                        type='checkbox'
                        checked={isSelected}
                        onChange={() => {
                            setIsSelected(!isSelected);
                            updateSelectedStatus(item._id, !isSelected);
                        }}></input>
                </div>
                <div className='cart-detail-img'>
                    <img
                        src={
                            `${process.env.REACT_APP_IP}/` +
                            item?.product?.images[0]
                        }
                        alt='product'></img>
                </div>
                <div className='cart-detail-body'>
                    <div className='cart-detail-prod-name'>
                        {item?.product?.name}
                    </div>
                    <div className='cart-detail-prod-brand'>
                        {item?.product?.brand?.name}
                    </div>
                    <ChooseQuantity
                        quantity={quantity}
                        setQuantity={setQuantity}
                        maxQuantity={item?.product?.quantity}
                    />
                </div>
            </div>
            <div className='right-side-detail'>
                <div className='cart-detail-price'>
                    <div className='sale-price'>
                        Giá sale:
                        <CurrencyFormat
                            value={item?.product?.price * 0.8}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={"VND"}
                            renderText={(value) => <div>{value}</div>}
                        />
                    </div>
                    <div className='origin-price'>
                        Giá gốc:{" "}
                        <CurrencyFormat
                            value={item?.product?.price}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={"VND"}
                            renderText={(value) => <div>{value}</div>}
                        />
                    </div>
                </div>
                <div
                    className='remove-btn'
                    onClick={handleRemoveButtonCliecked}>
                    <i class='fa-solid fa-trash'></i>
                </div>
            </div>
        </div>
    );
};

export default CartDetail;
