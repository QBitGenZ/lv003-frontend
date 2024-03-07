import BestSellerItem from "../home/components/BestSellerItem";

const ProductRecommend = () => {
    return (
        <div className='ProductRecommend'>
            <div className='recommend-title'>Có thể bạn sẽ thích</div>
            <div className='recommend-detail'>
                <BestSellerItem ProductNo={"001"}></BestSellerItem>
                <BestSellerItem ProductNo={"002"}></BestSellerItem>
                <BestSellerItem ProductNo={"003"}></BestSellerItem>
                <BestSellerItem ProductNo={"004"}></BestSellerItem>
                <BestSellerItem ProductNo={"005"}></BestSellerItem>
            </div>
        </div>
    );
};

export default ProductRecommend;
