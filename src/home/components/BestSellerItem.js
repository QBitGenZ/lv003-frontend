import { Link } from "react-router-dom";

const BestSellerItem = ({ product }) => {
    return (
        <Link to={"/product"} id='product-link'>
            <div className='BestSellerItem'>
                <div className='product-top'>
                    <div className='product-image'>
                        <img src={product.ProductImage[0]}></img>
                    </div>
                    <div className='product-name'>{product.ProductName}</div>
                    <div className='product-description'>
                        {product.ProductDescription}
                    </div>
                </div>
                <div className='product-bot'>
                    <div className='product-vote'>
                        <i class='fa-solid fa-star fa-sm'></i>{" "}
                        {product.ProductVote}
                    </div>
                    <div className='product-price'>{product.ProductPrice}</div>
                </div>
            </div>
        </Link>
    );
};

export default BestSellerItem;
