import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ type }) => {
    return type === "prod-portfolio" ? (
        <div id='Navigation'>
            <div className='prod-portfolio'>
                <div className='portfolio-field portfolio-clean'>
                    <div className='portfolio-title'>Làm sạch</div>
                    <Link to={"/cleanser"} className='portfolio-element'>
                        Sữa rửa mặt
                    </Link>
                    <div className='portfolio-element'>Tẩy trang</div>
                    <div className='portfolio-element'>Bông tẩy trang</div>
                </div>
                <div className='portfolio-field portfolio-moisturizing'>
                    <div className='portfolio-title'>Dưỡng ẩm</div>
                    <div className='portfolio-element'>Toner</div>
                    <div className='portfolio-element'>Serum</div>
                    <div className='portfolio-element'>Kem dưỡng</div>
                </div>
                <div className='portfolio-field portfolio-treatment'>
                    <div className='portfolio-title'>Điều trị</div>
                    <div className='portfolio-element'>Làm trắng</div>
                    <div className='portfolio-element'>Trị mụn</div>
                    <div className='portfolio-element'>Trị nám</div>
                </div>
                <div className='portfolio-field portfolio-protect'>
                    <div className='portfolio-title'>Bảo vệ</div>
                    <div className='portfolio-element'>Kem chống nắng</div>
                    <div className='portfolio-element'>Sữa chống nắng</div>
                    <div className='portfolio-element'>Sáp chống nắng</div>
                </div>
                <div className='portfolio-field portfolio-makeup'>
                    <div className='portfolio-title'>Make-up</div>
                    <div className='portfolio-element'>Trang điểm mặt</div>
                    <div className='portfolio-element'>Trang điểm mắt</div>
                    <div className='portfolio-element'>Trang điểm môi</div>
                </div>
                <div className='portfolio-field portfolio-img'>
                    <img
                        src={
                            process.env.PUBLIC_URL + "/images/portfolio.png"
                        }></img>
                </div>
            </div>
        </div>
    ) : type === "brand" ? (
        <div id='Navigation'>
            <div className='brand'>
                <div className='portfolio-field'>
                    <div className='portfolio-element'>AmorePacific</div>
                    <div className='portfolio-element'>Biore</div>
                    <div className='portfolio-element'>Clinique</div>
                </div>
                <div className='portfolio-field'>
                    <div className='portfolio-element'>Kiehl’s</div>
                    <div className='portfolio-element'>Laneige</div>
                    <div className='portfolio-element'>L’Oréal</div>
                </div>
                <div className='portfolio-field'>
                    <div className='portfolio-element'>Murad</div>
                    <div className='portfolio-element'>Nars</div>
                    <div className='portfolio-element'>Nivea</div>
                </div>
                <div className='portfolio-field'>
                    <div className='portfolio-element'>Shiseido</div>
                    <div className='portfolio-element'>SK-II</div>
                    <div className='portfolio-element'>Channel</div>
                </div>
                <div className='portfolio-field'>
                    <div className='portfolio-element'>Dear, Klairs</div>
                    <div className='portfolio-element'>Dr.Jart+</div>
                    <div className='portfolio-element'>Innisfree</div>
                </div>
                <div className='portfolio-field'>
                    <div className='portfolio-element'>Laneige</div>
                    <div className='portfolio-element'>Some By Mi</div>
                    <div className='portfolio-element'>Sulwhasoo</div>
                </div>
                <div className='portfolio-field portfolio-img'>
                    <img
                        src={
                            process.env.PUBLIC_URL + "/images/brand.png"
                        }></img>
                </div>
            </div>
        </div>
    ) : null;
};

export default Navigation;
