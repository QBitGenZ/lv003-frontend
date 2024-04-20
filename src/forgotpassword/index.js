import Header from "../common/Header";
import Footer from "../common/Footer";
import ForgotPasswordBody from "./ForgotPasswordBody";
import { useState } from "react";
import SearchBody from "../common/SearchBody";

import "./ForgotPassword.css";

const ForgotPassword = () => {
    const [isShowSearch, setIsShowSearch] = useState(false);

    return (
        <div id='FogotPassword'>
            <Header
                isShowSearch={isShowSearch}
                setIsShowSearch={setIsShowSearch}
            />
            {isShowSearch ? (
                <SearchBody setIsShowSearch={setIsShowSearch} />
            ) : (
                <>
                    <ForgotPasswordBody />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default ForgotPassword;
