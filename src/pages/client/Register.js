import { useState } from "react";
import "./Register.css";
import Select from "react-select";
import Header from "../../components/fixed/Header";

const options = [
    { value: "male", label: "Nam" },
    { value: "female", label: "Nữ" },
];

export default function () {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <>
            <Header></Header>
            <div className='Register'>
                <div className='register-title'>Đăng ký tài khoản</div>
                <form className='register-form'>
                    <div className='left-side'>
                        <input type='text' placeholder='Họ và tên'></input>
                        <input type='email' placeholder='Email'></input>
                        <input type='tel' placeholder='Số điện thoại'></input>
                        <Select
                            className='gender'
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}></Select>
                    </div>
                    <div className='seperate-line'></div>
                    <div className='right-side'>
                        <input type='date'></input>
                        <input type='password' placeholder='Mật khẩu'></input>
                        <input
                            type='password'
                            placeholder='Nhập lại mật khẩu'></input>
                        <input type='checkbox' id='confirm'></input>
                        <label htmlFor='confirm'>
                            Bằng cách gửi biểu mẫu này. Tôi xác nhận rằng đã đọc
                            và chấp nhận chính sách bảo mật của CLAIRE
                        </label>
                    </div>
                </form>
                <button className='register-btn'>Tạo tài khoản</button>
            </div>
        </>
    );
}
