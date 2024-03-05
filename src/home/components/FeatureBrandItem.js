import { BrandData } from "../json/BrandData";

const FeatureBrandItem = ({ BrandNo }) => {
    const brand = BrandData.find((item) => item.BrandNo === BrandNo);

    if (!brand) {
        return <div>Không tìm thấy sản phẩm</div>;
    } else {
        return (
            <div className='FeatureBrandItem'>
                <div className='brand-img'>
                    <img src={brand.BrandImage}></img>
                </div>
                <div className='brand-name'>{brand.BrandName}</div>
                <div className='brand-description'>
                    {brand.BrandDescription}
                </div>
            </div>
        );
    }
};

export default FeatureBrandItem;
