import Header from "../common/Header";
import Footer from "../common/Footer";
import SupportBody from "./SupportBody";
import SearchBody from "../common/SearchBody";
import { useState } from "react";
import "./Support.css";

const Support = () => {
    const [isShowSearch, setIsShowSearch] = useState(false);

    return (
        <div id='Support'>
            <Header
                isShowSearch={isShowSearch}
                setIsShowSearch={setIsShowSearch}
            />
            {isShowSearch ? (
                <SearchBody setIsShowSearch={setIsShowSearch} />
            ) : (
                <>
                    <SupportBody />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Support;
