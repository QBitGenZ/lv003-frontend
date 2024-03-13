const SummaryCartItem = ({ product }) => {
    return (
        <div className='SummaryCartItem'>
            <div className='summary-cart-item-left'>
                <img
                    src={
                        process.env.PUBLIC_URL + product.ProductImage[0]
                    }></img>
            </div>

            <div className='summary-cart-item-right'>
                <div className='summary-cart-item-prod-name'>
                    {product.ProductName}
                </div>
                <div className='summary-cart-item-prod-brand'>
                    {product.ProductBrand}
                </div>
                <div className='summary-cart-item-prod-quantity'>SL: 1</div>
                <div className='summary-cart-item-prod-price'>
                    <div className='actual-price'>280.000vnd</div>
                    <div className='origin-price'>350.000vnd</div>
                </div>
            </div>
        </div>
    );
};

export default SummaryCartItem;
