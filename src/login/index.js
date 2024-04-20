import "./Login.css";
import Header from "../common/Header";
import LoginBody from "./LoginBody";
import { useState } from "react";
import SearchBody from "../common/SearchBody";

const Login = () => {
    const [isShowSearch, setIsShowSearch] = useState(false);

    return (
        <>
            <Header
                isShowSearch={isShowSearch}
                setIsShowSearch={setIsShowSearch}
            />
            {isShowSearch ? (
                <SearchBody setIsShowSearch={setIsShowSearch} />
            ) : (
                <>
                    <LoginBody />
                </>
            )}
        </>
    );
};

export default Login;
