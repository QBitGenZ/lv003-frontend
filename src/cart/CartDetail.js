import { useEffect, useState } from "react";
import ChooseQuantity from "../common/ChooseQuantity";
import CurrencyFormat from "react-currency-format";

const CartDetail = ({ item, isInCart, deleteItem, updateData }) => {
    const [quantity, setQuantity] = useState(item?.quantity);

    const handleRemoveButtonCliecked = () => {
        deleteItem(item?._id);
    };

    useEffect(
        () => updateData(item?._id, item?.product?._id, quantity),
        [quantity]
    );

    if (isInCart) {
        console.log(item);
        {
            return (
                <div id={"CartDetail"} className={item?.product?.ProductNo}>
                    <div className='left-side-detail'>
                        <div className='cart-detail-choice'>
                            <input type='checkbox'></input>
                        </div>
                        <div className='cart-detail-img'>
                            <img
                                src={
                                    "http://localhost:3000/" +
                                    item?.product?.images[0]
                                }
                                alt='product'></img>
                        </div>
                        <div className='cart-detail-body'>
                            <div className='cart-detail-prod-name'>
                                {item?.product?.name}
                            </div>
                            <div className='cart-detail-prod-brand'>
                                {item?.product?.brand}
                            </div>
                            <ChooseQuantity
                                quantity={quantity}
                                setQuantity={setQuantity}
                            />
                        </div>
                    </div>
                    <div className='right-side-detail'>
                        <div className='cart-detail-price'>
                            <div className='sale-price'>
                                Giá sale:
                                <CurrencyFormat
                                    value={item?.product?.price}
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
        }
    }
    return (
        <div id='CartDetail' className='not-in-cart'>
            <div className='left-side-detail'>
                <div className='cart-detail-img'>
                    <img src={item?.product.iamges[0]} alt='product'></img>
                </div>
                <div className='cart-detail-body'>
                    <div className='cart-detail-prod-name'>
                        {item?.product.name}
                    </div>
                    <div className='cart-detail-prod-brand'>
                        {item?.product.brand}
                    </div>
                    <div className='quantity'>Số lượng: {item.quantity}</div>
                </div>
            </div>
            <div className='right-side-detail'>
                <div className='cart-detail-price'>
                    <div className='sale-price'>{item?.product.price}</div>
                </div>
            </div>
        </div>
    );
};

export default CartDetail;
