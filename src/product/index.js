import "./Product.css";
import Header from "../common/Header";
import ProductBody from "./ProductBody";

export default function () {
    return (
        <>
            <Header></Header>
            <ProductBody ProductNo={"001"}></ProductBody>
        </>
    );
}
