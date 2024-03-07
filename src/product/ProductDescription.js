import { useCollapse } from "react-collapsed";

const ProductDescription = () => {
    const { getCollapseProps, getToggleProps } = useCollapse();

    return (
        <div className='ProductDescription'>
            <div className='expand-title' {...getToggleProps()}>
                <span>Mô tả sản phẩm</span>
                <i class='fa-solid fa-plus'></i>
            </div>
            <div {...getCollapseProps()}>
                <div className='expand-content'>
                    <p>
                        Công dụng tinh chất rau má cấp ẩm Skin1004 Madagascar
                        Centella Hyalu-Cica Blue Serum
                    </p>
                    <ul>
                        <li>
                            Chiết xuất rau má vùng Madagascar giàu vitamin
                            A,B1,B2,B3,C giúp làm mờ vết thâm nám,dưỡng trắng da
                            cũng như chống lão hoá cho da săn chắc mịn màng.
                        </li>
                        <li>
                            Titerpenoids pentacylic tăng cường lưu thông máu
                            dưới da kích thích tái tạo tế bào da mới.
                        </li>
                        <li>
                            Rau má còn chứa chất giảm viêm, ức chế vi khuẩn gây
                            mụn, làm dịu da và se khít lỗ chân lông.
                        </li>
                        <li>
                            Công thức pha trộn tỉ lệ hoàn hảo giữa Hyaluronic
                            acid và Cica của Skin1004 giúp đem lại khả năng làm
                            dịu tuyệt vời
                        </li>
                        <li>
                            Phù hợp mọi loại da, đặc biệt là da dầu thiếu nước
                        </li>
                    </ul>
                    <p>
                        Thành phần Skin1004 Madagascar Centella Hyalu-Cica Blue
                        Serum:
                    </p>
                    <ul>
                        <li>
                            Chứa 5 loại Hyaluronic acid với các trọng lượng phân
                            tử khác nhau, giúp cấp nước cho đủ các tầng da
                        </li>
                        <li>
                            Công thức độc quyền “Hyalu-Cica” chứa chiết xuất rau
                            má hàm lượng cao giúp làm dịu da và 3 loại
                            Hyaluronic acid giúp củng cố hàng rào độ ẩm, cân
                            bằng lượng dầu và nước
                        </li>
                        <li>
                            Ceramide Biome: Ceramide có kích thước nano, nhỏ hơn
                            lỗ chân lông nhanh chóng thấm sâu vào trong da, mang
                            lại độ đàn hồi, săn chắc và củng cố hàng rào bảo vệ
                            da
                        </li>
                        <li>
                            Niacinamide bà Adenosine: cải thiện độ đàn hồi, giảm
                            thiểu vết nhăn trên da
                        </li>
                        <li>
                            Chiết xuất Hedera Helix: giúp làm dịu làn da thô
                            ráp, đem lại sức sống cho làn da
                        </li>
                        <li>Chất dạng gel, thấm nhanh, không dính, nhẹ mặt</li>
                    </ul>
                    <p>
                        – Hướng dẫn sử dụng: Sau khi rửa mặt và sử dụng toner,
                        lấy một lượng sản phẩm vừa đủ rồi thoa lên mặt theo
                        chiều kết cấu da.
                    </p>
                    <p>
                        – Lưu ý: Ngưng sử dụng khi xuất hiện tình trạng kích ứng
                        da, bảo quản nơi tránh ánh sáng mặt trời.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
