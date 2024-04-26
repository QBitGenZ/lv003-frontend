import Header from "../common/Header";
import Promotion from "./components/Promotion";
import BestSeller from "./components/BestSeller";
import FeatureBrand from "./components/FeatureBrand";
import Footer from "../common/Footer";
import "./Home.css";
import { useState } from "react";
import SearchBody from "../common/SearchBody";
import Banner from "./components/Banner";

const Home = () => {
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
                    <Banner />
                    <Promotion />
                    <BestSeller />
                    {/* <FeatureBrand /> */}
                    <Footer />
                </>
            )}
        </>
    );
};

export default Home;
