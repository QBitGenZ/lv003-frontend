const CartDetail = (product) => {
    return (
        <div id='CartDetail'>
            <div className='cart-detail-choice'>
                <input type='checkbox'></input>
            </div>
            <div className='cart-detail-img'>
                <img src={product.ProductImg[0]}></img>
            </div>
            <div className='cart-detail-body'>
                <div className='cart-detail-prod-name'>
                    {product.ProductName}
                </div>
                <div className='cart-detail-prod-brand'>
                    {product.ProductBrand}
                </div>
                <div className='cart-detail-prod-quantity'>Số lượng: 1</div>
            </div>
            <div className='cart-detail-price'></div>
        </div>
    );
};
