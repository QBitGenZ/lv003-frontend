import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SummaryCart from "./SummaryCart";
import Navigation from "./Navigation";

export default function Header() {
    const [showSummaryCart, setShowSummaryCart] = useState(false);
    const [showProductPortfolio, setShowProductPortfolio] = useState(false);
    const [showBrandPortfolio, setShowBrandPortfolio] = useState(false);

    const handleMosueEnterCart = () => {
        setShowSummaryCart(true);
    };

    const handleMosueLeaveCart = () => {
        setShowSummaryCart(false);
    };

    const handleMosueEnterProductPortfolio = () => {
        setShowProductPortfolio(true);
    };

    const handleMosueLeaveProductPortfolio = () => {
        setShowProductPortfolio(false);
    };

    const handleMosueEnterBrandPortfolio = () => {
        setShowBrandPortfolio(true);
    };

    const handleMosueLeaveBrandPortfolio = () => {
        setShowBrandPortfolio(false);
    };

    return (
        <>
            <div className='header-container'>
                <div className='header-main'>
                    <Link to={"/"} className='main-logo-container'>
                        <div className='main-logo-text'>
                            <img
                                src={
                                    process.env.PUBLIC_URL + "/images/logo.png"
                                }></img>
                        </div>
                        <div className='main-logo-lotus'>
                            <img
                                src={
                                    process.env.PUBLIC_URL + "/images/lotus.png"
                                }></img>
                        </div>
                    </Link>

                    <div className='main-tools-container'>
                        <Link to={"/search"}>
                            <i class='fa-solid fa-magnifying-glass tools-icon'></i>
                        </Link>
                        <Link
                            to={"/cart"}
                            onMouseEnter={handleMosueEnterCart}
                            onMouseLeave={handleMosueLeaveCart}>
                            <i class='fa-solid fa-cart-shopping tools-icon'></i>
                        </Link>
                        <Link to={"/login"}>
                            <i class='fa-solid fa-user tools-icon'></i>
                        </Link>
                        {showSummaryCart && <SummaryCart className='on-top' />}
                    </div>
                </div>

                <div className='header-nav'>
                    <div
                        className='header-nav-portfolio'
                        onMouseEnter={handleMosueEnterProductPortfolio}
                        onMouseLeave={handleMosueLeaveProductPortfolio}>
                        <a className='main-navigation' href='#'>
                            Danh mục sản phẩm
                        </a>
                        {showProductPortfolio && (
                            <Navigation type={"prod-portfolio"} />
                        )}
                    </div>

                    <a className='main-navigation' href='#'>
                        Hot Deals
                    </a>
                    <a className='main-navigation' href='#'>
                        Bán chạy
                    </a>
                    <div
                        className='header-nav-portfolio'
                        onMouseEnter={handleMosueEnterBrandPortfolio}
                        onMouseLeave={handleMosueLeaveBrandPortfolio}>
                        <a className='main-navigation' href='#'>
                            Thương hiệu
                        </a>
                        {showBrandPortfolio && <Navigation type={"brand"} />}
                    </div>
                    <a className='main-navigation' href='#'>
                        Giới thiệu
                    </a>
                    <a className='main-navigation' href='#'>
                        Hỗ trợ
                    </a>
                </div>
            </div>
            <Outlet></Outlet>
        </>
    );
}
