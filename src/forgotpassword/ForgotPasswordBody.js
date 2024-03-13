import { useEffect, useState } from "react";

const ForgotPasswordBody = () => {
    const [isEmailValidation, setIsEmailValidation] = useState(true);
    const [isShow, setIsShow] = useState(false);
    const [count, setCount] = useState(30);
    const [isClickedSendCode, setIsClickedSendCode] = useState(false);

    const handleCheckedRadioButton = () => {
        setIsShow(true);
    };

    const handleChooseEmailValidation = () => {
        handleCheckedRadioButton();
        setIsEmailValidation(true);
    };

    const handleChoosePhoneValidation = () => {
        handleCheckedRadioButton();
        setIsEmailValidation(false);
    };

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count - 1);
        }, 1000);

        if (count == 0) clearTimeout(timer);
    });

    const handleClickedSendCode = () => {
        setIsClickedSendCode(true);
    };

    return (
        <div id='ForgotPasswordBody'>
            <div className='forgot-passwd-container'>
                <div className='forgot-passwd-title'>Quên mật khẩu</div>
                <form className='forgot-passwd-form'>
                    <div className='validation-type'>
                        <span>Chọn phương thức xác thực</span>
                        <div className='choose-validation-type-container'>
                            <input
                                id='phone-validation'
                                type='radio'
                                name='validation-type'
                                onClick={handleChoosePhoneValidation}></input>
                            <label htmlFor='phone-validation'>
                                Số điện thoại
                            </label>
                            <input
                                id='email-validation'
                                type='radio'
                                name='validation-type'
                                onClick={handleChooseEmailValidation}></input>
                            <label htmlFor='email-validation'>Email</label>
                        </div>
                    </div>
                    {isShow ? (
                        <div className='validation-field'>
                            {isEmailValidation ? (
                                <input
                                    type='email'
                                    placeholder='Nhập email của bạn'></input>
                            ) : (
                                <input
                                    type='phone'
                                    placeholder='Nhập số điện thoại của bạn'></input>
                            )}
                            <span
                                className='send-code'
                                onClick={handleClickedSendCode}>
                                {isClickedSendCode && count > 0
                                    ? count + "s"
                                    : "Gửi mã"}
                            </span>
                        </div>
                    ) : (
                        <></>
                    )}

                    <input
                        type='text'
                        placeholder='Nhập mã xác nhận'
                        className='block'></input>
                    <input
                        type='password'
                        placeholder='Nhập mật khẩu mới'
                        className='block'></input>
                    <input
                        type='password'
                        placeholder='Nhập lại mật khẩu mới'
                        className='block'></input>
                    <button className='button change-passwd-btn'>
                        Xác nhận
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordBody;
