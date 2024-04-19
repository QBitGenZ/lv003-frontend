import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useAuth } from "../common/AuthContext";

const LoginBody = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("username", username);
        formData.append("password", password);

        fetch(`${process.env.REACT_APP_IP}/v1/login`, {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                setTokenAndExpirationTime(data.access_token);
                if (localStorage.getItem("token")) {
                    alert("Đăng nhập thành công");

                    window.location.href = "/";
                }
            })
            .catch((error) => {
                console.log(error);
                alert("Đăng nhập thất bại");
            });
    };

    const setTokenAndExpirationTime = (token) => {
        localStorage.setItem("token", token);
        const currentTime = new Date();
        console.log(new Date().getTime());
        const minute = 60 * 1000;
        const expirationTime = currentTime.getTime() + 365 * 24 * 60 * minute;
        localStorage.setItem("expirationTime", expirationTime.toString());
    };

    return (
        <div id='LoginBody'>
            <div className='login-side'>
                <div className='login-title'>Truy cập tài khoản</div>
                <form className='login-form'>
                    <input
                        className='user-name'
                        type='text'
                        placeholder='Tên tài khoản'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}></input>
                    <input
                        className='password'
                        type='password'
                        placeholder='Mật khẩu'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}></input>
                    <div className='login-action'>
                        <div className='remember'>
                            <input id='remember' type='checkbox'></input>
                            <label htmlFor='remember'>Ghi nhớ</label>
                        </div>
                        <Link className='change-passwd' to={"/forgotpassword"}>
                            Quên mật khẩu?
                        </Link>
                    </div>
                    <button className='button login-btn' onClick={handleLogin}>
                        Đăng nhập
                    </button>
                </form>
            </div>

            <div className='seperate-line'></div>

            <div className='register-side'>
                <div className='register-title'>Tạo mới tài khoản</div>
                <Link className='button register-btn' to={"/register"}>
                    Đăng ký tài khoản
                </Link>
                <a className='privacy'>Chính sách bảo mật</a>
            </div>
        </div>
    );
};

export default LoginBody;
