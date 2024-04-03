import { Navigate } from "react-router-dom";
import Header from "../common/Header";
import "./User.css";
import UserBody from "./UserBody";

const User = () => {
    const token = localStorage.getItem("token");

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
                <Header />
                <UserBody />
            </div>
        );
    } else {
        return <Navigate replace to={"/login"} />;
    }
};

export default User;
