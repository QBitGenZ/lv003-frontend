import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

const BestSellerItem = ({ product }) => {
    return (
        <Link to={"/product/" + product._id} id='product-link'>
            <div className='BestSellerItem'>
                <div className='product-top'>
                    <div className='product-image'>
                        <img
                            src={
                                `${process.env.REACT_APP_IP}/` +
                                product?.images[0]
                            }></img>
                    </div>
                    <div className='product-name'>{product?.brand?.name}</div>
                    <div className='product-description'>
                        {product?.sale && (
                            <span className={product?.sale && "product-sale"}>
                                -{product?.sale}%
                            </span>
                        )}{" "}
                        {product?.name}
                    </div>
                </div>
                <div className='product-bot'>
                    <div className='product-vote'>
                        <i class='fa-solid fa-star fa-sm'></i> <p>4.8</p>
                    </div>
                    <div
                        className={
                            product?.sale
                                ? "product-price saled"
                                : "product-price"
                        }>
                        <CurrencyFormat
                            value={product?.price}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={"VND"}
                            renderText={(value) => <div>{value}</div>}
                        />
                    </div>
                    {product?.sale && (
                        <div className='product-saled-price'>
                            <CurrencyFormat
                                value={
                                    product?.price -
                                    product?.price * (product?.sale / 100)
                                }
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={"VND"}
                                renderText={(value) => <div>{value}</div>}
                            />
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default BestSellerItem;
