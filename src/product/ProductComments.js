import { useState } from "react";
import Rating from "./Rating";

const ProductComments = () => {
    const [isShow, setIsShow] = useState(false);

    const handleClickShowDetailBtn = (event) => {
        setIsShow(true);
    };

    const handleClickHideDetailBtn = (event) => {
        setIsShow(false);
    };

    return (
        <div className='ProductComments'>
            <div className='comment-stars'>
                <Rating/>
                
                <p>Tuyệt vời</p>
            </div>
            <div className='comment-customer'>Khách hàng: Tuyết</div>
            {isShow ? (
                <div className='comment-detail'>
                    Mua dùng được hơn tuần mới đánh giá. Sữa rửa mặt sạch, cảm
                    giác hạn chế được độ dầu, nhờn da.Mua dùng được hơn tuần mới
                    đánh giá. Sữa rửa mặt sạch, cảm giác hạn chế được độ dầu,
                    nhờn da.Mua dùng được hơn tuần mới đánh giá. Sữa rửa mặt
                    sạch, cảm giác hạn chế được độ dầu, nhờn da. Mua dùng được
                    hơn tuần mới đánh giá. Sữa rửa mặt sạch, cảm giác hạn chế
                    được độ dầu, nhờn da.Mua dùng được hơn tuần mới đánh giá.
                    Sữa rửa mặt sạch, cảm giác hạn chế được độ dầu, nhờn da.Mua
                    dùng được hơn tuần mới đánh giá. Sữa rửa mặt sạch, cảm giác
                    hạn chế được độ dầu, nhờn da.
                </div>
            ) : (
                <div className='comment-content'>
                    Sản phẩm tuyệt vời, tôi đã trải ngiệm và cảm thấy sản phẩm
                    tuyệt vời
                </div>
            )}
            {isShow ? (
                <div
                    className='hide-detail-btn'
                    onClick={handleClickHideDetailBtn}>
                    Thu gọn
                </div>
            ) : (
                <div
                    className='show-detail-btn'
                    onClick={handleClickShowDetailBtn}>
                    Chi tiết
                </div>
            )}
        </div>
    );
};

export default ProductComments;
