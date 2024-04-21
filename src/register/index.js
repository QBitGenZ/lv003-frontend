import Header from "../common/Header";
import RegisterBody from "./RegisterBody";
import "./Register.css";
import SearchBody from "../common/SearchBody";
import { useState } from "react";

const Register = () => {
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
                <RegisterBody></RegisterBody>
            )}
        </>
    );
};

export default Register;
