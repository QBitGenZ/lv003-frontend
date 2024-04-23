import { useState, useEffect } from "react";
import BestSellerItem from "../home/components/BestSellerItem";
import Pagination from "../common/Pagination";

const ProductsBody = ({ selectedType }) => {
    const [products, setProducts] = useState([]);
    const [row1, setRow1] = useState([]);
    const [row2, setRow2] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_IP}/v1/products?page=${currentPage}&type=${selectedType}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setProducts(data?.data);
                setRow1(data?.data.slice(0, 5));
                setRow2(data?.data.slice(5, 10));
                setTotalPage(data?.meta?.totalPage);
            })
            .catch((error) => console.log(error));
    }, [currentPage, selectedType]);

    return (
        <div id='ProductsBody'>
            <div className='products-body-row-1'>
                {row1?.map((item) => {
                    return <BestSellerItem product={item} />;
                })}
            </div>
            <div className='products-body-row-2'>
                {row2?.map((item) => {
                    return <BestSellerItem product={item} />;
                })}
            </div>

            {totalPage > 0 && (
                <Pagination
                    totalPage={totalPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            )}
        </div>
    );
};

export default ProductsBody;
