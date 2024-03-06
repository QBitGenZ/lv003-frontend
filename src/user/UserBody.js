import { useState } from "react";
import { Link } from "react-router-dom";

const UserBody = () => {
    const [isInforPage, setIsInforPage] = useState(true);

    return (
        <div className='UserBody'>
            <div className='user-left-side'>
                <div
                    className={`infor ${isInforPage ? "user-body-active" : ""}`}
                    onClick={() => setIsInforPage(true)}>
                    Thông tin tài khoản
                </div>
                <div
                    className={`passwd ${
                        isInforPage ? "" : "user-body-active"
                    }`}
                    onClick={() => setIsInforPage(false)}>
                    Thay đổi mật khẩu
                </div>
                <Link className='logout' to={"/login"}>
                    Đăng xuất
                </Link>
            </div>
            <div className='seperate-line'></div>
            <div className='user-right-side'>
                {isInforPage ? (
                    <div className='infor-page'>
                        <div className='name'>
                            <h2>Họ và tên</h2>
                            <p>Nguyễn Phúc Nguyên Khoa</p>
                        </div>
                        <div className='email'>
                            <h2>Email</h2>
                            <p>khoa.nphucnguyen@gmail.com</p>
                        </div>
                        <div className='phone'>
                            <h2>Số điện thoại</h2>
                            <p>0999999999</p>
                        </div>
                        <div className='birthday'>
                            <h2>Ngày sinh</h2>
                            <p>01/01/2003</p>
                        </div>
                        <div className='change-profile-btn'>Chỉnh sửa</div>
                    </div>
                ) : (
                    <div className='passwd-page'>
                        <div className='chgpasswd-title'>Đổi mật khẩu</div>
                        <form className='chgpasswd-form'>
                            <input
                                className='current-passwd'
                                type='password'
                                placeholder='Mật khẩu hiện tại'></input>
                            <input
                                className='new-passwd'
                                type='password'
                                placeholder='Mật khẩu mới'></input>
                            <input
                                className='retype-passwd'
                                type='password'
                                placeholder='Nhập lại mật khẩu mới'></input>
                            <div className='button-container'>
                                <button className='button confirm-btn'>
                                    Lưu
                                </button>
                                <div className='button discard-btn'>Hủy</div>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserBody;
