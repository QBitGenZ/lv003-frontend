import { useState } from "react";

const options = [
    { value: "Male", label: "Nam" },
    { value: "Female", label: "Nữ" },
];

const RegisterBody = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");
    const [birthday, setBirthday] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("username", username);
        formData.append("password", password);
        formData.append("fullname", fullname);
        formData.append("email", email);
        // formData.append("gender", gender);
        formData.append("birthday", Date(birthday));
        formData.append("phone", phone);

        fetch("http://localhost:3000/v1/register", {
            headers: {
                Accept: "application/json",
            },
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    return (
        <div id='RegisterBody'>
            <div className='register-title'>Đăng ký tài khoản</div>
            <form className='register-form'>
                <div className='left-side'>
                    <input
                        type='text'
                        placeholder='Họ và tên'
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}></input>
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}></input>
                    <input
                        type='tel'
                        placeholder='Số điện thoại'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}></input>
                    <select
                        className='gender'
                        placeholder='Giới tính'
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}>
                        {options.map((item) => (
                            <option value={item.value} label={item.label} />
                        ))}
                    </select>
                </div>

                <div className='seperate-line'></div>

                <div className='right-side'>
                    <input
                        type='date'
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}></input>
                    <input
                        type='text'
                        placeholder='Tên đăng nhập'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}></input>
                    <input
                        type='password'
                        placeholder='Mật khẩu'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}></input>
                    <div className='confirm-container'>
                        <input type='checkbox' id='confirm'></input>
                        <label htmlFor='confirm'>
                            Bằng cách gửi biểu mẫu này. Tôi xác nhận rằng đã đọc
                            và chấp nhận <span>Chính sách bảo mật</span> của
                            CLAIRE
                        </label>
                    </div>
                </div>
            </form>
            <button className='register-btn' onClick={handleSubmit}>
                Tạo tài khoản
            </button>
        </div>
    );
};

export default RegisterBody;
