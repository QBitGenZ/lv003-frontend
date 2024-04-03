const UserInfor = ({ user, handleClickButton }) => {
    function convertDateFormat(dateTimeString) {
        // Tạo một đối tượng Date từ chuỗi ngày giờ
        const dateObject = new Date(dateTimeString);

        // Trích xuất ngày, tháng và năm từ đối tượng Date
        const day = String(dateObject.getDate()).padStart(2, "0"); // Thêm số 0 vào trước nếu cần thiết
        const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0, nên phải cộng thêm 1
        const year = dateObject.getFullYear();

        // Xây dựng chuỗi định dạng mới
        const formattedDate = `${day}/${month}/${year}`;

        return formattedDate;
    }

    return (
        <div id='UserInfor'>
            <div className='user-infor-title'>Tài khoản của bạn</div>
            <div className='user-infor-body'>
                <div className='user-infor-name'>
                    <span>Họ và tên</span>
                    {user?.fullname}
                </div>
                <div className='user-infor-email'>
                    <span>Email</span>
                    {user?.email}
                </div>
                <div className='user-infor-phone'>
                    <span>Số điện thoại</span>
                    {user?.phone}
                </div>
                <div className='user-infor-birth'>
                    <span>Ngày sinh</span>
                    {convertDateFormat(user?.birthday)}
                </div>
            </div>
            <div
                className='button user-change-infor-btn'
                onClick={handleClickButton}>
                Chỉnh sửa
            </div>
        </div>
    );
};

export default UserInfor;
