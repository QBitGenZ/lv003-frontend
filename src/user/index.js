import { Navigate } from "react-router-dom";
import Header from "../common/Header";
import "./User.css";
import { useState } from "react";
import UserBody from "./UserBody";
import SearchBody from "../common/SearchBody";

const User = () => {
    const token = localStorage.getItem("token");
    const [isShowSearch, setIsShowSearch] = useState(false);

    const isTokenExpired = () => {
        const expirationTime = parseInt(localStorage.getItem("expirationTime"));

        // If expiration time is null, token was expired
        if (!expirationTime) {
            return true;
        }

        const currentTime = new Date().getTime();

        return expirationTime <= currentTime;
    };

    if (token?.length > 0 && !isTokenExpired()) {
        return (
            <div id='User'>
                <Header
                    isShowSearch={isShowSearch}
                    setIsShowSearch={setIsShowSearch}
                />
                {isShowSearch ? (
                    <SearchBody setIsShowSearch={setIsShowSearch} />
                ) : (
                    <UserBody />
                )}
            </div>
        );
    } else {
        return <Navigate replace to={"/login"} />;
    }
};

export default User;
