import Header from "../../components/fixed/Header";
import "./User.css";

export default function () {
    return (
        <>
            <Header></Header>
            <div className='User'>
                <div className='profile-container'>
                    <div className='left-side'>
                        <p className='profile-info'>Thông tin tài khoản</p>
                        <p className='profile-passwd'>Mật khẩu</p>
                        <p className='profile-logout'>Đăng xuất</p>
                    </div>
                    <div className='seperate-line'></div>
                    <div className='right-side'>
                        <div className='info-section'>
                            <div className='info-main'></div>
                            <div className='info-btn'></div>
                        </div>
                        <div className='passwd-section'>
                            <div className='passwd-main'></div>
                            <div className='passwd-btn-container'>
                                <div className='btn-accept'></div>
                                <div className='btn-decline'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='submit-btn'></div>
            </div>
        </>
    );
}
