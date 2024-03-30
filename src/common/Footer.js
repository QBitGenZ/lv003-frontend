import { Link } from "react-router-dom";

export default function Footer() {
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
        </div>
    );
}
