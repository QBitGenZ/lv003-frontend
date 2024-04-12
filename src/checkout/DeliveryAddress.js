import React from "react";
import { useNavigate } from 'react-router-dom';

const DeliveryAddress = ({ handleClickedEvent, address, setAddress }) => {
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setAddress({ ...address, [name]: newValue });
    };
    
    const handleBackButtonClick = () => {
        navigate(-1); // Trở về trang trước đó
    };
    return (
        <div id='DeliveryAddress'>
            <div className='delivery-address-title'>Địa chỉ nhận hàng</div>
            <div className='delivery-address-form'>
                <input
                    name='recipientName'
                    type='text'
                    placeholder='Tên người nhận'
                    value={address.recipientName}
                    onChange={handleChange}></input>
                <input
                    name='phoneNumber'
                    type='phone'
                    placeholder='Số điện thoại '
                    value={address.phoneNumber}
                    onChange={handleChange}></input>
                <input
                    name='provinceCity'
                    type='text'
                    placeholder='Tỉnh/Thành phố'
                    value={address.provinceCity}
                    onChange={handleChange}></input>
                <input
                    name='district'
                    type='text'
                    placeholder='Quận/Huyện'
                    value={address.district}
                    onChange={handleChange}></input>
                <input
                    name='ward'
                    type='text'
                    placeholder='Phường/Xã'
                    value={address.ward}
                    onChange={handleChange}></input>
                <input
                    name='detailAddress'
                    type='text'
                    placeholder='Chi tiết (số nhà, đường...)'
                    value={address.detailAddress}
                    onChange={handleChange}></input>
                    <div className='default-address'>
                        <input
                            name='isDefaultAddress'
                            id='choose-default-address'
                            type='checkbox'
                            placeholder=''
                            checked={address.isDefaultAddress}
                            onChange={handleChange}></input>
                        <label htmlFor='choose-default-address'>
                            Đặt làm địa chỉ mặc định
                        </label>
                    </div>
                <div className='form-footer'>
                <button
                        className='button order-btn'
                        onClick={handleBackButtonClick}>
                        Trở lại
                    </button>
                    <button
                        className='button order-btn'
                        onClick={() => {
                            if (!address.recipientName || !address.phoneNumber || !address.provinceCity || !address.district || !address.ward || !address.detailAddress) {
                                alert('Vui lòng nhập đầy đủ thông tin địa chỉ');
                                return;
                            }
                            handleClickedEvent()
                            }
                        }>
                        Tiếp theo
                    </button>
                </div>
                
            </div>
        </div>
    );
};

export default DeliveryAddress;
