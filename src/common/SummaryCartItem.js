import CurrencyFormat from "react-currency-format";

const SummaryCartItem = ({ product }) => {
    return (
        <div className='SummaryCartItem'>
            <div className='summary-cart-item-left'>
                <img src={"http://localhost:3000/" + product?.images[0]}></img>
            </div>

            <div className='summary-cart-item-right'>
                <div className='summary-cart-item-prod-name'>
                    {product?.name}
                </div>
                <div className='summary-cart-item-prod-brand'>
                    {product?.brand}
                </div>
                <div className='summary-cart-item-prod-quantity'>SL: 1</div>
                <div className='summary-cart-item-prod-price'>
                    <div className='actual-price'>
                        <CurrencyFormat
                            value={product?.price * 0.8}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={"VND"}
                            renderText={(value) => <div>{value}</div>}
                        />
                    </div>
                    <div className='origin-price'>
                        <CurrencyFormat
                            value={product?.price}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={"VND"}
                            renderText={(value) => <div>{value}</div>}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummaryCartItem;
