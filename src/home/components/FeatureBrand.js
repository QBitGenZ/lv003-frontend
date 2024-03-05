import FeatureBrandItem from "./FeatureBrandItem";

export default function () {
    return (
        <div className='FeatureBrand'>
            <div className='brand-title'>Feature brand</div>
            <div className='brand-items'>
                <FeatureBrandItem BrandNo={"001"} />
                <FeatureBrandItem BrandNo={"002"} />
                <FeatureBrandItem BrandNo={"003"} />
            </div>
        </div>
    );
}
