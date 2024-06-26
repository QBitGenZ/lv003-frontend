import { useCollapse } from "react-collapsed";
import { useState } from "react";

const ProductDescription = ({ product }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse();

    const toggleExpand = () => {
        setIsExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <div className='ProductDescription'>
            <div
                className='expand-title'
                {...getToggleProps({ onClick: toggleExpand })}>
                <span>Mô tả sản phẩm</span>
                {isExpanded ? (
                    <i className='fa-solid fa-minus'></i>
                ) : (
                    <i className='fa-solid fa-plus'></i>
                )}
            </div>
            <div {...getCollapseProps()}>
                {product?.videoUrl && (
                    <video className='video' controls autoPlay loop>
                        <source
                            src={
                                `${process.env.REACT_APP_IP}/` +
                                product?.videoUrl
                            }
                            type='video/mp4'
                        />
                    </video>
                )}

                <div
                    className='expand-content'
                    dangerouslySetInnerHTML={{
                        __html: product?.description,
                    }}></div>
            </div>
        </div>
    );
};

export default ProductDescription;
