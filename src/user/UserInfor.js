const UserInfor = () => {
    return (
        <div id='UserInfor'>
            <div className='user-infor-title'>Tài khoản của bạn</div>
            <div className='user-infor-body'>
                <div className='user-infor-name'>
                    <span>Họ và tên</span>
                    Hồ Nhĩ Khang
                </div>
                <div className='user-infor-email'>
                    <span>Email</span>
                    khang@gmail.com
                </div>
                <div className='user-infor-phone'>
                    <span>Số điện thoại</span>
                    0912439329
                </div>
                <div className='user-infor-birth'>
                    <span>Ngày sinh</span>
                    30/02/2002
                </div>
            </div>
            <div className='button user-change-infor-btn'>Chỉnh sửa</div>
        </div>
    );
};

export default UserInfor;
