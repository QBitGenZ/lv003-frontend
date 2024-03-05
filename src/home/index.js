import Header from "../common/Header";
import Promotion from "./components/Promotion";
import BestSeller from "./components/BestSeller";
import FeatureBrand from "./components/FeatureBrand";
import Footer from "../common/Footer";
import { ImageData } from "./json/BannerData";
import "./Home.css";
import Swiper from "./components/Swiper";

const Home = (props) => {
    return (
        <>
            <Header />
            <Swiper />
            <Promotion />
            <BestSeller />
            <FeatureBrand />
            <Footer />
        </>
    );
};

export default Home;
