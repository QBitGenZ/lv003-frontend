import CurrencyFormat from "react-currency-format";

const SummaryCartItem = ({ product }) => {
    return (
        <div className='SummaryCartItem'>
            <div className='summary-cart-item-left'>
                <img
                    src={
                        `${process.env.REACT_APP_IP}/` +
                        product?.product?.images[0]
                    }></img>
            </div>

            <div className='summary-cart-item-right'>
                <div className='summary-cart-item-prod-name'>
                    {product?.product?.name}
                </div>
                <div className='summary-cart-item-prod-brand'>
                    {product?.product?.brand?.name}
                </div>
                <div className='summary-cart-item-prod-quantity'>
                    SL: {product?.quantity}
                </div>
                <div className='summary-cart-item-prod-price'>
                    <div className='actual-price'>
                        <CurrencyFormat
                            value={product?.product?.price * 0.8}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={"VND"}
                            renderText={(value) => <div>{value}</div>}
                        />
                    </div>
                    <div className='origin-price'>
                        <CurrencyFormat
                            value={product?.product?.price}
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
