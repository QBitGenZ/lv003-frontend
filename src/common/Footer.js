import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
    const [isShowChatbot, setIsShowChatbot] = useState(false);

    const handleClickChatbot = () => {
        setIsShowChatbot(!isShowChatbot);
    };

    return (
        <div className='Footer'>
            <div className='footer-contact'>
                <a>
                    <i class='fa-brands fa-facebook-f fa-2x'></i>
                </a>

                <a>
                    <i class='fa-solid fa-phone fa-2x'></i>
                </a>

                <a>
                    <i class='fa-brands fa-square-instagram fa-2x'></i>
                </a>
            </div>
            <div className='footer-navigation'>
                <div className='navigation-col col-1'>
                    <a>Liên hệ với chúng tôi</a>
                </div>
                <div className='navigation-col col-2'>
                    <a>Trung tâm hỗ trợ</a>
                    <a>Hướng dẫn đặt hàng</a>
                </div>
                <div className='navigation-col col-3'>
                    <Link to={"/privacy"}>Chính sách bảo mật</Link>
                    <Link to={"/privacy"}>Điều khoản sử dụng</Link>
                    <Link to={"/privacy"}>Chính sách cookie</Link>
                </div>
                <div className='navigation-col col-4'>
                    <a>Tìm cửa hàng</a>
                </div>
            </div>
            <div className='footer-services'>
                <p>Số đăng ký kinh doanh: 1013-12312-412</p>
                <p>Dịch vụ khách hàng: 109033513</p>
            </div>
            <div id='chat-bot' onClick={() => handleClickChatbot()}>
                <img
                    src={process.env.PUBLIC_URL + "/images/Cloud.png"}
                    alt='chatbot'></img>
                {isShowChatbot ? (
                    <iframe
                        id='chat-bot-iframe'
                        width='350'
                        height='430'
                        allow='microphone;'
                        src='https://console.dialogflow.com/api-client/demo/embedded/9ef6087d-810a-4a08-8369-c77001464eb2'></iframe>
                ) : (
                    <div id='chatbot-msg'>Ask me anything...</div>
                )}
            </div>
        </div>
    );
}
