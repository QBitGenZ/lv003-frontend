import UserInfor from "./UserInfor";
import UserOrder from "./UserOrder";
import UserPurchaseHistory from "./UserPurchaseHistory";
import { Orders } from "../common/json/Orders";
import { useEffect, useState } from "react";
import UserChangeInfor from "./UserChangeInfor";

const UserBody = () => {
    const [userBody, setUserBody] = useState("overview");
    const [order, setOrder] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser();
        getOrder();
    }, []);

    const getUser = () => {
        fetch(`${process.env.REACT_APP_IP}/v1/info`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setUser(data?.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getOrder = () => {
        fetch(`${process.env.REACT_APP_IP}/v1/orders/myorders`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setOrder(data?.data);
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
                        {order?.map((item) => (
                            <UserOrder order={item} />
                        ))}
                        <div className='user-purchase-history-title'>
                            Lịch sử mua hàng
                        </div>
                        {order?.map((item) => (
                            <UserPurchaseHistory order={item} />
                        ))}
                    </div>
                    <div className='user-body-right'>
                        <UserInfor
                            user={user}
                            handleClickButton={handleClickChgInfBtn}
                        />
                    </div>
                </>
            ) : userBody === "changeInfor" ? (
                <UserChangeInfor
                    user={user}
                    handleClickButton={handleClickCancelChgBtn}
                />
            ) : null}
        </div>
    );
};

export default UserBody;
