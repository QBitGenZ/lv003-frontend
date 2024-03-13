import { useState } from "react";

const DeliveryOptions = ({ deliveryOptions }) => {
    const [currentOption, setCurrentOption] = useState(deliveryOptions);

    const handleChangeOption = (event) => {
        setCurrentOption(event.target.classList.item(0));
    };

    return (
        <div id='DeliveryOptions'>
            <div className='delivery-options-title'>Tùy chọn giao hàng</div>
            <div className='delivery-options-body'>
                <div
                    className={
                        "GHTK " + (currentOption === "GHTK" ? "enable" : "")
                    }
                    onClick={handleChangeOption}>
                    Giao hàng tiết kiệm
                </div>
                <div
                    className={
                        "GHN " + (currentOption === "GHN" ? "enable" : "")
                    }
                    onClick={handleChangeOption}>
                    Giao hàng nhanh
                </div>
                <div
                    className={
                        "on-site " +
                        (currentOption === "on-site" ? "enable" : "")
                    }
                    onClick={handleChangeOption}>
                    Nhận tại cửa hàng
                </div>
            </div>
        </div>
    );
};

export default DeliveryOptions;
