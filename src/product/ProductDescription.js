import { useCollapse } from "react-collapsed";

const ProductDescription = ({ product }) => {
    const { getCollapseProps, getToggleProps } = useCollapse();

    return (
        <div className='ProductDescription'>
            <div className='expand-title' {...getToggleProps()}>
                <span>Mô tả sản phẩm</span>
                <i class='fa-solid fa-plus'></i>
            </div>
            <div {...getCollapseProps()}>
                <div className='expand-content'>{product?.description}</div>
            </div>
        </div>
    );
};

export default ProductDescription;
