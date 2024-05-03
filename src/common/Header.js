import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import SummaryCart from "./SummaryCart";
import Navigation from "./Navigation";

export default function Header({ isShowSearch, setIsShowSearch }) {
    const [showSummaryCart, setShowSummaryCart] = useState(false);
    const [showProductPortfolio, setShowProductPortfolio] = useState(false);
    const [showBrandPortfolio, setShowBrandPortfolio] = useState(false);

    const [isLogin, setIsLogin] = useState(false);

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
    const handleLogout = () => {
        // Perform logout actions here, e.g., clear token, update login status
        localStorage.removeItem("token");
        setIsLogin(false);
        // Redirect or perform any other necessary actions after logout
        // For example, redirect to the homepage
        window.location.href = "/";
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLogin(true);
        }
    }, []);

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

                    <div
                        className={
                            (isShowSearch && "visibility-hiden") +
                            " main-tools-container"
                        }>
                        <span
                            className='search-icon'
                            onClick={() => setIsShowSearch(true)}>
                            <i class='fa-solid fa-magnifying-glass tools-icon'></i>
                        </span>
                        <Link
                            to={"/cart"}
                            onMouseEnter={handleMosueEnterCart}
                            onMouseLeave={handleMosueLeaveCart}>
                            <i class='fa-solid fa-cart-shopping tools-icon'></i>
                        </Link>
                        {isLogin ? (
                            <>
                                <Link to={"/user"}>
                                    <i className='fa-solid fa-user tools-icon'></i>
                                </Link>
                                <Link to={"/logout"} onClick={handleLogout}>
                                    <i class='fa-solid fa-right-to-bracket'></i>
                                </Link>
                            </>
                        ) : (
                            <Link to={"/login"}>
                                <i className='fa-solid fa-user tools-icon'></i>
                            </Link>
                        )}
                        {showSummaryCart && <SummaryCart className='on-top' />}
                    </div>
                </div>

                <div className='header-nav'>
                    <Link to={"/about-us"} className='main-navigation'>
                        Giới thiệu
                    </Link>

                    <div
                        className='header-nav-portfolio'
                        onMouseEnter={handleMosueEnterProductPortfolio}
                        onMouseLeave={handleMosueLeaveProductPortfolio}>
                        <Link to={"/products"} className='main-navigation'>
                            Danh mục sản phẩm
                        </Link>
                        {showProductPortfolio && (
                            <Navigation type={"prod-portfolio"} />
                        )}
                    </div>

                    {/* <a className='main-navigation'>Hot Deals</a> */}
                    <Link to={"/best-seller"} className='main-navigation'>
                        Sản phẩm Bán chạy
                    </Link>
                    {/* <div
                        className='header-nav-portfolio'
                        onMouseEnter={handleMosueEnterBrandPortfolio}
                        onMouseLeave={handleMosueLeaveBrandPortfolio}>
                        <a className='main-navigation'>Thương hiệu</a>
                        {showBrandPortfolio && <Navigation type={"brand"} />}
                    </div> */}
                    <Link to={"/support"} className='main-navigation'>
                        Hỗ trợ
                    </Link>
                </div>
            </div>
            <Outlet></Outlet>
        </>
    );
}
