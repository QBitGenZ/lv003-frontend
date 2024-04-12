// CartDetail.js
import React from "react";
import { useState, useEffect } from "react";
import ChooseQuantity from "../common/ChooseQuantity";
import CurrencyFormat from "react-currency-format";


const CartDetail = ({ item, isInCart, deleteItem, updateData, selected, onCheckboxChange }) => {
    const [quantity, setQuantity] = React.useState(item?.quantity);
    

    const handleRemoveButtonClicked = () => {
        deleteItem(item?._id);
    };

    // const handleCheckboxChange = () => {
    //     onCheckboxChange(item._id); // Thông báo rằng checkbox đã thay đổi với ID tương ứng
    // };

    return (
        <div id={"CartDetail"} className={item?.product?.ProductNo}>
            <div className='left-side-detail'>
                <div className='cart-detail-choice'>

                    <input 
                        type='checkbox' 
                        checked={selected} 
                        onChange={handleCheckboxChange} // Thêm sự kiện onChange
                    /> 

                </div>
                <div className='cart-detail-img'>
                    <img
                        src={
                            `${process.env.REACT_APP_IP}/` +
                            item?.product?.images[0]
                        }
                        alt='product'
                    />
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
                <div className='remove-btn' onClick={handleRemoveButtonClicked}>
                    <i className='fa-solid fa-trash'></i>
                </div>
            </div>
        </div>
    );
};

export default CartDetail;