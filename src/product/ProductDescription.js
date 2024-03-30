import { useCollapse } from "react-collapsed";
import { useState } from "react";


const ProductDescription = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const { getCollapseProps, getToggleProps } = useCollapse();

    const toggleExpand = () => {
        setIsExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <div className='ProductDescription'>
            <div className='expand-title' {...getToggleProps({ onClick: toggleExpand })}>
                <span>Mô tả sản phẩm</span>
                {isExpanded ? (
                    <i className="fa-solid fa-minus"></i>
                ) : (
                    <i className="fa-solid fa-plus"></i>
                )}
            </div>
            <div {...getCollapseProps()}>
                <div className='expand-content'>{product?.description}</div>
            </div>
        </div>
    );
};

export default ProductDescription;
