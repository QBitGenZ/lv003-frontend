import { Link, Outlet } from "react-router-dom";

export default function Header() {
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
                        <i class='fa-solid fa-magnifying-glass tools-icon'></i>
                        <i class='fa-solid fa-cart-shopping tools-icon'></i>
                        <Link to={"/login"}>
                            <i class='fa-solid fa-user tools-icon'></i>
                        </Link>
                    </div>
                </div>

                <div className='header-nav'>
                    <a href='#'>Danh mục sản phẩm</a>
                    <a href='#'>Hot Deals</a>
                    <a href='#'>Bán chạy</a>
                    <a href='#'>Thương hiệu</a>
                    <a href='#'>Giới thiệu</a>
                    <a href='#'>Hỗ trợ</a>
                </div>
            </div>
            <Outlet></Outlet>
        </>
    );
}