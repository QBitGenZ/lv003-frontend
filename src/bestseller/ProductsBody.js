import { useState, useEffect } from "react";
import BestSellerItem from "../home/components/BestSellerItem";
import Pagination from "../common/Pagination";

const BrandsBody = ({ products }) => {
    return (
        <div id='BrandsBody'>
            <div className='products-body-row-1'>
                {products?.map((item) => {
                    return <BestSellerItem product={item?.product} />;
                })}
            </div>
        </div>
    );
};

export default BrandsBody;
