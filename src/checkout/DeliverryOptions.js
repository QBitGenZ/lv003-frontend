const DeliveryOptions = ({ deliveryOptions, setDeliveryOptions }) => {
    const handleChangeOption = (event) => {
        setDeliveryOptions(event.target.classList.item(0));
    };

    return (
        <div id='DeliveryOptions'>
            <div className='delivery-options-title'>Tùy chọn giao hàng</div>
            <div className='delivery-options-body'>
                <div
                    className={
                        "GHTK " + (deliveryOptions === "GHTK" ? "enable" : "")
                    }
                    onClick={handleChangeOption}>
                    Giao hàng tiết kiệm
                </div>
                <div
                    className={
                        "GHN " + (deliveryOptions === "GHN" ? "enable" : "")
                    }
                    onClick={handleChangeOption}>
                    Giao hàng nhanh
                </div>
                <div
                    className={
                        "on-site " +
                        (deliveryOptions === "on-site" ? "enable" : "")
                    }
                    onClick={handleChangeOption}>
                    Nhận tại cửa hàng
                </div>
            </div>
        </div>
    );
};

export default DeliveryOptions;
