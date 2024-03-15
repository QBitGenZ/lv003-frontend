import Header from "../common/Header";
import Footer from "../common/Footer";
import CleanserBody from "./CleanserBody";
import "./Cleanser.css";

const Cleanser = () => {
    return (
        <div id='Cleanser'>
            <Header />
            <div className='cleanser-title'>Sữa rửa mặt</div>
            <CleanserBody />
            <Footer />
        </div>
    );
};

export default Cleanser;
