import { useEffect, useState } from "react";
import "./ChooseQuantity.css";

const ChooseQuantity = ({ quantity, setQuantity, maxQuantity }) => {
    // const [quantity, setQuantity] = useState(originQuantity);

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        // console.log(quantity);
    };

    const handleDecrease = () => {
        if (quantity > 1 && newQuantity <= maxQuantity) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const handleChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity)) {
            console.log(newQuantity);
            if (newQuantity < 0) {
                setQuantity(1);
            } else {
                setQuantity(newQuantity);
            }
        }
    };

    // useEffect(() => {}, [quantity]);

    useEffect(() => {
        // const savedQuantity = localStorage.getItem(product?._id);
        setQuantity(parseInt(quantity));
    }, [quantity]);

    return (
        <div id='ChooseQuantity' className='prevent-select'>
            <span>Số lượng:</span>
            <span className='minus' onClick={handleDecrease}>
                -
            </span>
            <input
                type='number'
                value={quantity}
                onChange={handleChange}
                max={maxQuantity}></input>
            <span className='plus' onClick={handleIncrease}>
                +
            </span>
        </div>
    );
};

export default ChooseQuantity;
