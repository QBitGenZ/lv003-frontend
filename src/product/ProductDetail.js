import { useEffect, useState } from "react";
import ChooseQuantity from "../common/ChooseQuantity";
import CurrencyFormat from "react-currency-format";

const ProductDetail = ({ product }) => {
    useEffect(() => window.scrollTo(0, 0), []);

    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_IP}/v1/brands`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleAddCartButton = () => {
        fetch(`${process.env.REACT_APP_IP}/v1/carts/`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                product: product._id,
                quantity: Number(quantity),
            }),
        })
            .then((res) => res.json())
            .then(() => {
                alert(`Thêm sản phẩm ${product?.name} thành công`);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    if (!product) {
        return (
            <div style={{ textAlign: "center" }}>Sản phẩm không tồn tại</div>
        );
    }

    console.log(product);
    return (
        <div id='ProductDetail'>
            <div className='product-detail-img'>
                <img
                    src={`${process.env.REACT_APP_IP}/` + product?.images[0]}
                    alt='product'></img>
            </div>
            <div className='product-detail-content'>
                <div className='product-content-name'>
                    {product?.sale && (
                        <span className='product-sale'>-{product?.sale}%</span>
                    )}{" "}
                    {product?.name}
                </div>
                <div className='product-content-code'>
                    {product?.brand?.name}
                </div>
                <div className='product-content-description'>
                    {product?.utility}
                </div>
                <div className='product-content-capacity'>
                    Dung tích: {product?.volume}
                </div>
                <div className='product-content-origin'>
                    Xuất xứ: {product?.origin}
                </div>
                <div className='product-content-vote'>
                    <div>
                        <i class='fa-solid fa-star fa-sm'></i>
                    </div>
                    <p>4.8</p>
                </div>
                <div
                    className={
                        product?.sale
                            ? "product-content-price saled"
                            : "product-content-price"
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
                <div className='product-content-quantity'>
                    <ChooseQuantity
                        quantity={quantity}
                        setQuantity={setQuantity}
                        maxQuantity={product?.quantity}
                    />
                </div>
                <div className='product-content-origin'>
                    Tồn kho: {product?.quantity}
                </div>
                <div
                    className='button product-content-add-btn'
                    onClick={handleAddCartButton}>
                    Thêm vào giỏ hàng
                </div>
                <div className='button product-content-buy-btn'>Mua hàng</div>
            </div>
        </div>
    );
};

export default ProductDetail;
