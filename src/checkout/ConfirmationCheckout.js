const ConfirmationCheckout = () => {
    return (
        <div id='ConfirmationCheckout'>
            <div className='confirm-infor'>
                <div className='confirm-infor-title'>Xác nhận thông tin</div>
                <div className='confirm-infor-body'>
                    <p className='order-code-infor'>
                        Bạn đã đặt thành công đơn hàng #0116196231
                    </p>
                    <p className='order-price-infor'>
                        Tổng số tiền: 2.024.000vnd
                    </p>
                    <p className='order-msg-infor'>
                        Bạn sẽ sớm nhận được đơn hàng
                    </p>
                </div>
            </div>
            <div className='confirm-receipt'>
                <div className='confirm-receipt-title'>Hóa đơn</div>
                <div className='confirm-receipt-header'>
                    <p className='receipt-time'>
                        Thời gian lập hóa đơn:
                        <span>9:30 16/03/2024</span>
                    </p>
                    <p className='receipt-code'>
                        Mã hóa đơn: <span>#0116196231</span>
                    </p>
                    <p className='receipt-payment-method'>
                        Phương thức thanh toán:
                        <span>Thanh toán khi nhận hàng</span>
                    </p>
                    <p className='receipt-address'>
                        Địa chỉ:
                        <span>
                            Nguyễn Thị Thúy Loan, 012421211241 Số nhà 152, P.
                            Xuân Khánh, Q. Ninh Kiều, TP. Cần Thơ
                        </span>
                    </p>
                </div>
                <table className='confirm-receipt-body'>
                    <tr>
                        <td>Tên sản phẩm</td>
                        <td>Đơn giá</td>
                        <td>Số lượng</td>
                        <td>Thành tiền</td>
                    </tr>
                    <tr>
                        <td>Sản phẩm A</td>
                        <td>500.000vnd</td>
                        <td>2</td>
                        <td>1.000.000vnd</td>
                    </tr>
                    <tr>
                        <td>Sản phẩm A</td>
                        <td>500.000vnd</td>
                        <td>2</td>
                        <td>1.000.000vnd</td>
                    </tr>
                    <tr>
                        <td>Sản phẩm A</td>
                        <td>500.000vnd</td>
                        <td>2</td>
                        <td>1.000.000vnd</td>
                    </tr>
                    <tr className='confirm-receipt-total'>
                        <td colSpan={2}>Tổng hóa đơn</td>
                        <td colSpan={2}>3.000.000vnd</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default ConfirmationCheckout;
