import { useState } from "react";

const UserChangeInfor = ({ user, handleClickButton }) => {
    const [isInforPage, setIsInforPage] = useState(true);

    const formatedDate = convertDateFormat(user?.birthday);

    const [fullname, setFullname] = useState(user?.fullname);
    const [email, setEmail] = useState(user?.email);
    const [phone, setPhone] = useState(user?.phone);
    const [birthday, setBirthday] = useState(formatedDate);

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    function convertDateFormat(dateTimeString) {
        // Tạo một đối tượng Date từ chuỗi ngày giờ
        const dateObject = new Date(dateTimeString);

        // Trích xuất ngày, tháng và năm từ đối tượng Date
        const day = String(dateObject.getDate()).padStart(2, "0"); // Thêm số 0 vào trước nếu cần thiết
        const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0, nên phải cộng thêm 1
        const year = dateObject.getFullYear();

        // Xây dựng chuỗi định dạng mới
        const formattedDate = `${year}-${month}-${day}`;

        return formattedDate;
    }

    const revertDateFormat = (dateString) => {
        const [year, month, day] = dateString.split("-");
        const revertedDate = new Date(year, month - 1, day);
        return revertedDate.toISOString();
    };

    const submitChangeInfor = () => {
        const form = new FormData();
        form.append("fullname", fullname);
        form.append("email", email);
        form.append("phone", phone);
        form.append("birtday", revertDateFormat(birthday));

        fetch(`${process.env.REACT_APP_IP}/v1`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: form,
        })
            .then((response) => {
                if (response.status === 200) {
                    alert("Thay đổi thông tin thành công");
                    window.location.reload();
                } else {
                    alert("Thay đổi thông tin thất bại");
                    return Promise.reject("Thay đổi thông tin thất bại");
                }
            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <div id='UserChangeInfor'>
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
                <div className='logout' onClick={logout}>
                    Đăng xuất
                </div>
            </div>
            <div className='seperate-line'></div>
            <div className='user-right-side'>
                {isInforPage ? (
                    <div className='infor-page'>
                        <div className='name'>
                            <h2>Họ và tên</h2>
                            <input
                                className='change-infor-input'
                                type='text'
                                value={fullname}
                                onChange={(e) =>
                                    setFullname(e.target.value)
                                }></input>
                        </div>
                        <div className='email'>
                            <h2>Email</h2>
                            <input
                                className='change-infor-input'
                                type='email'
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }></input>
                        </div>
                        <div className='phone'>
                            <h2>Số điện thoại</h2>
                            <input
                                className='change-infor-input'
                                type='text'
                                value={phone}
                                onChange={(e) =>
                                    setPhone(e.target.value)
                                }></input>
                        </div>
                        <div className='birthday'>
                            <h2>Ngày sinh</h2>
                            <input
                                className='change-infor-input'
                                type='date'
                                value={formatedDate}
                                onChange={(e) => {
                                    setBirthday(
                                        convertDateFormat(e.target.value)
                                    );
                                }}></input>
                        </div>
                        <div className='button-container'>
                            <div
                                className='change-profile-btn'
                                onClick={submitChangeInfor}>
                                Lưu
                            </div>
                            <div
                                className='button discard-btn'
                                onClick={handleClickButton}>
                                Hủy
                            </div>
                        </div>
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

export default UserChangeInfor;
