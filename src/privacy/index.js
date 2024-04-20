import "./Privacy.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useState } from "react";
import SearchBody from "../common/SearchBody";
import PrivacyBody from "./PrivacyBody";

const Privacy = () => {
    const [isShowSearch, setIsShowSearch] = useState(false);

    return (
        <div id='Privacy'>
            <Header
                isShowSearch={isShowSearch}
                setIsShowSearch={setIsShowSearch}
            />
            {isShowSearch ? (
                <SearchBody setIsShowSearch={setIsShowSearch} />
            ) : (
                <>
                    <PrivacyBody />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Privacy;
