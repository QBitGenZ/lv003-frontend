import UserInfor from "./UserInfor";
import UserOrder from "./UserOrder";
import UserPurchaseHistory from "./UserPurchaseHistory";
import { Orders } from "../common/json/Orders";
import { useState } from "react";
import UserChangeInfor from "./UserChangeInfor";

const UserBody = () => {
    const [userBody, setUserBody] = useState("overview");

    const handleClickChgInfBtn = () => {
        setUserBody("changeInfor");
    };

    const handleClickCancelChgBtn = () => {
        setUserBody("overview");
    };

    return (
        <div id='UserBody'>
            {userBody === "overview" ? (
                <>
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
                        <UserInfor handleClickButton={handleClickChgInfBtn} />
                    </div>
                </>
            ) : userBody === "changeInfor" ? (
                <UserChangeInfor handleClickButton={handleClickCancelChgBtn} />
            ) : null}
        </div>
    );
};

export default UserBody;
