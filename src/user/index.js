import { Navigate } from "react-router-dom";
import Header from "../common/Header";
import "./User.css";
import UserBody from "./UserBody";

const User = () => {
    if (localStorage.getItem("authenticated")) {
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
