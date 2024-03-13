import { Link } from "react-router-dom";

const LoginBody = () => {
    return (
        <div id='LoginBody'>
            <div className='login-side'>
                <div className='login-title'>Truy cập tài khoản</div>
                <form className='login-form'>
                    <input
                        className='user-name'
                        type='text'
                        placeholder='Tên tài khoản'></input>
                    <input
                        className='password'
                        type='password'
                        placeholder='Mật khẩu'></input>
                    <div className='login-action'>
                        <div className='remember'>
                            <input id='remember' type='checkbox'></input>
                            <label htmlFor='remember'>Ghi nhớ</label>
                        </div>
                        <Link className='change-passwd' to={"/forgotpassword"}>
                            Quên mật khẩu?
                        </Link>
                    </div>
                    <button className='button login-btn'>Đăng nhập</button>
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
