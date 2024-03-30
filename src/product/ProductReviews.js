import React from 'react';
import Rating from './Rating'; 

const ProductReviews = () => {
    return (
        <div className='ProductReviews'>
            <div className='reviews-title'>Đánh giá sản phẩm</div>
            <div className='product-reviews-container'>
                <div className='reviews-left-side'>
                    <div className='left-side-title'>
                        Đánh giá về sản phẩm này
                    </div>
                    <div className='left-side-statistics'>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/images/statistics.png"
                            }></img>
                    </div>
                </div>
                <div className='reviews-right-side'>
                   
                    <div className='right-side-star'>
                        <Rating />
                    </div>
                    <div className='right-side-rate'>4.3 / 5</div>
                    <div className='right-side-reviews-quantity'>
                        (1735 đánh giá)
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductReviews;
