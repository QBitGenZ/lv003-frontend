import Header from "../common/Header";
import Footer from "../common/Footer";
import ForgotPasswordBody from "./ForgotPasswordBody";
import "./ForgotPassword.css";

const ForgotPassword = () => {
    return (
        <div id='FogotPassword'>
            <Header />
            <ForgotPasswordBody />
            <Footer />
        </div>
    );
};

export default ForgotPassword;
