import { useEffect, useState } from "react";
import "./ChooseQuantity.css";

const ChooseQuantity = ({ originQuantity }) => {
    const [quantity, setQuantity] = useState(originQuantity);

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity((prevQuantity) => prevQuantity - 1);
    };

    const handleChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity) && newQuantity >= originQuantity) {
            setQuantity(newQuantity);
        }
    };

    useEffect(() => {
        localStorage.setItem("productQuantity", quantity.toString());
    }, [quantity]);

    useEffect(() => {
        const savedQuantity = localStorage.getItem("productQuantity");
        if (savedQuantity) {
            setQuantity(parseInt(savedQuantity));
        }
    }, []);

    return (
        <div id='ChooseQuantity'>
            <span>Số lượng:</span>
            <span className='minus' onClick={handleDecrease}>
                -
            </span>
            <input
                type='number'
                value={quantity}
                onChange={handleChange}></input>
            <span className='plus' onClick={handleIncrease}>
                +
            </span>
        </div>
    );
};

export default ChooseQuantity;