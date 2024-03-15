import UserInfor from "./UserInfor";
import UserOrder from "./UserOrder";
import UserPurchaseHistory from "./UserPurchaseHistory";
import { Orders } from "../common/json/Orders";

const UserBody = () => {
    return (
        <div id='UserBody'>
            <div className='user-body-left'>
                <div className='user-order-title'>Đơn hàng của bạn</div>
                {Orders.map((item) => (
                    <UserOrder order={item} />
                ))}
                <div className='user-purchase-history-title'>
                    Lịch sử mua hàng
                </div>
                {Orders.map((item) => (
                    <UserPurchaseHistory order={item} />
                ))}
            </div>
            <div className='user-body-right'>
                <UserInfor />
            </div>
        </div>
    );
};

export default UserBody;
