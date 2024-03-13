import ChooseQuantity from "../common/ChooseQuantity";

const CartDetail = ({ product, isInCart }) => {
    if (isInCart) {
        return (
            <div id={"CartDetail"} className={product.ProductNo}>
                <div className='left-side-detail'>
                    <div className='cart-detail-choice'>
                        <input type='checkbox'></input>
                    </div>
                    <div className='cart-detail-img'>
                        <img src={product.ProductImage[0]} alt='product'></img>
                    </div>
                    <div className='cart-detail-body'>
                        <div className='cart-detail-prod-name'>
                            {product.ProductName}
                        </div>
                        <div className='cart-detail-prod-brand'>
                            {product.ProductBrand}
                        </div>
                        <ChooseQuantity originQuantity={2} />
                    </div>
                </div>
                <div className='right-side-detail'>
                    <div className='cart-detail-price'>
                        <div className='sale-price'>
                            Giá sale: {product.ProductPrice}
                        </div>
                        <div className='origin-price'>
                            Giá gốc: {product.ProductPrice}
                        </div>
                    </div>
                    <div className='remove-btn'>
                        <i class='fa-solid fa-trash'></i>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div id='CartDetail' className='not-in-cart'>
            <div className='left-side-detail'>
                <div className='cart-detail-img'>
                    <img src={product.ProductImage[0]} alt='product'></img>
                </div>
                <div className='cart-detail-body'>
                    <div className='cart-detail-prod-name'>
                        {product.ProductName}
                    </div>
                    <div className='cart-detail-prod-brand'>
                        {product.ProductBrand}
                    </div>
                    <div className='quantity'>Số lượng: 1</div>
                </div>
            </div>
            <div className='right-side-detail'>
                <div className='cart-detail-price'>
                    <div className='sale-price'>{product.ProductPrice}</div>
                </div>
            </div>
        </div>
    );
};

export default CartDetail;
