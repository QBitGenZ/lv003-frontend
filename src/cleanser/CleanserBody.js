import { ProductData } from "../common/json/ProductData";
import BestSellerItem from "../home/components/BestSellerItem";

const CleanserBody = () => {
    return (
        <div id='CleanserBody'>
            <div className='cleanser-body-row-1'>
                {ProductData.map((item, index) => (
                    <BestSellerItem product={item} />
                ))}
            </div>
            <div className='cleanser-body-row-2'>
                {ProductData.map((item, index) => (
                    <BestSellerItem product={item} />
                ))}
            </div>
        </div>
    );
};

export default CleanserBody;
