import "./FeatureBrand.css";

export default function () {
    return (
        <div className='FeatureBrand'>
            <div className='feature-title'>Feature brand</div>
            <div className='feature-items'>
                <div className='feature1'>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/client/feature1.png"
                        }></img>
                    <div className='item-title'>title</div>
                    <div className='item-description'>
                        SKIN1004 Madagascar siêu cấp ẩm, phục hồi cho những làn
                        da khô rát, thiếu sức sống
                    </div>
                </div>

                <div className='feature2'>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/client/feature2.png"
                        }></img>
                    <div className='item-title'>aesture</div>
                    <div className='item-description'>
                        AESTURA mang đến trải nghiệm bảo vệ làn da trước tác hại
                        xấu của các tác nhân bên ngoài{" "}
                    </div>
                </div>

                <div className='feature3'>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/client/feature3.png"
                        }></img>
                    <div className='item-title'>round lab</div>
                    <div className='item-description'>
                        ROUND LAB luôn chứng minh được sự uy tín suốt thời gian
                        qua với các sản phẩm đa dạng, chất lượng, an toàn tuyệt
                        đối
                    </div>
                </div>
            </div>
        </div>
    );
}
