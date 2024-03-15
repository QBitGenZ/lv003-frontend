import Header from "../common/Header";
import Promotion from "./components/Promotion";
import BestSeller from "./components/BestSeller";
import FeatureBrand from "./components/FeatureBrand";
import Footer from "../common/Footer";
import "./Home.css";
import Banner from "./components/Banner";
import Navigation from "../common/Navigation";

const Home = (props) => {
    return (
        <>
            <Header />
            <Banner />
            <Promotion />
            <BestSeller />
            <FeatureBrand />
            <Footer />
        </>
    );
};

export default Home;
