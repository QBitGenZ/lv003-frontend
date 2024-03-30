import "./Search.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function () {
  const [isShow, setIsShow] = useState(true);

  return (
    <>
      <div className="header-container">
        <div className="header-main">
          <Link to={"/"} className=" search-page main-logo-container">
            <div className="main-logo-text">
              <img src={process.env.PUBLIC_URL + "/images/logo.png"}></img>
            </div>
            <div className="main-logo-lotus">
              <img src={process.env.PUBLIC_URL + "/images/lotus.png"}></img>
            </div>
          </Link>
        </div>

        <div className="header-nav">
          <a href="#">Danh mục sản phẩm</a>
          <a href="#">Hot Deals</a>
          <a href="#">Bán chạy</a>
          <a href="#">Thương hiệu</a>
          <a href="#">Giới thiệu</a>
          <a href="#">Hỗ trợ</a>
        </div>
      </div>

      {isShow ? (
        <div className="SearchBody">
          <Link className="close-btn" to={"/"}>
            <i class="fa-solid fa-xmark fa-2x"></i>
          </Link>
          <div className="search-container">
            <i class="fa-solid fa-magnifying-glass tools-icon"></i>
            <input
              type="text"
              placeholder="Bạn cần gì..."
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Bạn cần gì...")}
            ></input>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
