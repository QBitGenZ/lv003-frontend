import BestSellerItem from "../home/components/BestSellerItem";
import { useEffect, useState } from "react";
import "../home/Home.css";
import "./Search.css";

const SearchBody = ({ setIsShowSearch }) => {
    const [keyword, setKeyWord] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        if (keyword === "") {
            setSearchResult([]);
            return;
        }
        fetch(
            `${process.env.REACT_APP_IP}/v1/products/search?keyword=${keyword}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                setSearchResult(data?.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, [keyword]);

    const handleSearch = (e) => {
        e.preventDefault();
        setKeyWord(e.target.value);
    };

    return (
        <div className='SearchBody'>
            <div className='close-btn' onClick={() => setIsShowSearch(false)}>
                <i class='fa-solid fa-xmark fa-2x'></i>
            </div>
            <form className='search-container'>
                <i class='fa-solid fa-magnifying-glass tools-icon'></i>
                <input
                    type='text'
                    placeholder='Bạn cần gì...'
                    onChange={(event) => handleSearch(event)}
                    onSubmit={(e) => e.preventDefault()}></input>
            </form>
            {searchResult?.length > 0 ? (
                <>
                    <h3 style={{ marginLeft: "20px" }}>
                        Tìm thấy {searchResult?.length} sản phẩm
                    </h3>
                    <div className='search-result-container'>
                        {searchResult?.map((product, index) => {
                            return (
                                <>
                                    <BestSellerItem product={product} />
                                    {index % 5 === 0 && <br />}
                                </>
                            );
                        })}
                    </div>
                </>
            ) : (
                <div className='no-products'>
                    <p>Không tìm thấy sản phẩm</p>
                </div>
            )}
        </div>
    );
};

export default SearchBody;
