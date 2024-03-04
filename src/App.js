import "./App.css";
import Footer from "./components/fixed/Footer";
import Header from "./components/fixed/Header";
import Banner from "./components/home/Banner";
import BestSeller from "./components/home/BestSeller";
import FeatureBrand from "./components/home/FeatureBrand";
import Promotion from "./components/home/Promotion";
import { ImageData } from "./json/BannerData";

function App() {
    return (
        <div className='App'>
            <Header />
            <Banner ImageData={ImageData} SlideIntervalTime={3000} />
            <Promotion></Promotion>
            <BestSeller></BestSeller>
            <div className='cloud'>
                <img
                    src={
                        process.env.PUBLIC_URL + "/images/client/cloud.png"
                    }></img>
            </div>
            <FeatureBrand></FeatureBrand>
            <Footer></Footer>
        </div>
    );
}

export default App;
