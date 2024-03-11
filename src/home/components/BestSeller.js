import BestSellerItem from "./BestSellerItem";
import { ProductData } from "../../common/json/ProductData";

export default function () {
    return (
        <div className='BestSeller'>
            <div className='title'>Best Sellers</div>
            <div className='items-container'>
                {ProductData.map((value, index) => {
                    if (index < 5) return <BestSellerItem product={value} />;
                })}
            </div>
        </div>
    );
}
