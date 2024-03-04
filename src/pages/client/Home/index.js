import Header from "./components/Header";
import Banner from "./components/Banner";
import Promotion from "./components/Promotion";
import BestSeller from "./components/BestSeller";
import FeatureBrand from "./components/FeatureBrand";
import Footer from "./components/Footer";
import { ImageData } from "./json/BannerData";
import "./home.css";

const Home = (props) => {
    return (
        <>
            <Header />
            <Banner ImageData={ImageData} SlideIntervalTime={3000} />
            <Promotion />
            <BestSeller />
            <FeatureBrand />
            <Footer />
        </>
    );
};

export default Home;
