const DeliveryAddress = () => {
    return (
        <div id='DeliveryAddress'>
            <div className='delivery-address-title'>Địa chỉ nhận hàng</div>
            <div className='delivery-address-form'>
                <input type='text' placeholder='Tỉnh/Thành phố'></input>
                <input type='text' placeholder='Quận/Huyện'></input>
                <input type='text' placeholder='Phường/Xã'></input>
                <input
                    type='text'
                    placeholder='Chi tiết (số nhà, đường...)'></input>
                <input type='text' placeholder='Tên người nhận'></input>
                <input type='text' placeholder='Số điện thoại'></input>
                <div className='form-footer'>
                    <div className='default-address'>
                        <input
                            id='choose-default-address'
                            type='checkbox'
                            placeholder=''></input>
                        <label htmlFor='choose-default-address'>
                            Đặt làm địa chỉ mặc định
                        </label>
                    </div>
                    <button className='button order-btn'>Tiếp theo</button>
                </div>
            </div>
        </div>
    );
};

export default DeliveryAddress;
