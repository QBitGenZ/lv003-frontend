import "./BestSeller.css";
import BestSellerItem from "./BestSellerItem";

export default function () {
    return (
        <div className='BestSeller'>
            <div className='title'>Best Sellers</div>
            <div className='items-container'>
                <BestSellerItem ProductNo={"001"}></BestSellerItem>
                <BestSellerItem ProductNo={"002"}></BestSellerItem>
                <BestSellerItem ProductNo={"003"}></BestSellerItem>
                <BestSellerItem ProductNo={"004"}></BestSellerItem>
                <BestSellerItem ProductNo={"005"}></BestSellerItem>
            </div>
        </div>
    );
}
