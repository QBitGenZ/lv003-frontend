import { Link } from "react-router-dom";
import "./Navigation.css";
import { useState, useEffect } from "react";

const Navigation = ({ type }) => {
    const [productPortfolio, setProductPortfolio] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        getProductPortfolio();
        getBrands();
    }, []);

    const getProductPortfolio = () => {
        fetch(`${process.env.REACT_APP_IP}/v1/product-types?limit=20`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setProductPortfolio(data?.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getBrands = () => {
        fetch(`${process.env.REACT_APP_IP}/v1/brands?limit=20`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setBrands(data?.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return type === "prod-portfolio" ? (
        <div id='Navigation'>
            <div className='prod-portfolio'>
                <div className='portfolio-field portfolio-clean'>
                    {productPortfolio.map((item, index) => {
                        if (index < 3)
                            return (
                                <Link
                                    to={`/products/${item?.name}`}
                                    className='portfolio-element'>
                                    {item?.name}
                                </Link>
                            );
                    })}
                </div>
                <div className='portfolio-field portfolio-moisturizing'>
                    {productPortfolio.map((item, index) => {
                        if (index >= 3 && index < 6)
                            return (
                                <Link
                                    to={`/products/${item?.name}`}
                                    className='portfolio-element'>
                                    {item?.name}
                                </Link>
                            );
                    })}
                </div>
                <div className='portfolio-field portfolio-treatment'>
                    {productPortfolio.map((item, index) => {
                        if (index >= 6 && index < 9)
                            return (
                                <Link
                                    to={`/products/${item?.name}`}
                                    className='portfolio-element'>
                                    {item?.name}
                                </Link>
                            );
                    })}
                </div>
                <div className='portfolio-field portfolio-protect'>
                    {productPortfolio.map((item, index) => {
                        if (index >= 9 && index < 12)
                            return (
                                <Link
                                    to={`/products/${item?.name}`}
                                    className='portfolio-element'>
                                    {item?.name}
                                </Link>
                            );
                    })}
                </div>
                <div className='portfolio-field portfolio-makeup'>
                    {productPortfolio.map((item, index) => {
                        if (index >= 12 && index < 15)
                            return (
                                <Link
                                    to={`/products/${item?.name}`}
                                    className='portfolio-element'>
                                    {item?.name}
                                </Link>
                            );
                    })}
                </div>
                <div className='portfolio-field portfolio-img'>
                    <img
                        src={
                            process.env.PUBLIC_URL + "/images/portfolio.png"
                        }></img>
                </div>
            </div>
        </div>
    ) : type === "brand" ? (
        <div id='Navigation'>
            <div className='brand'>
                <div className='portfolio-field'>
                    {brands.map((item, index) => {
                        if (index < 3) {
                            return (
                                <Link
                                    to={`/products/${item?.name}`}
                                    className='portfolio-element'>
                                    {item?.name}
                                </Link>
                            );
                        }
                    })}
                </div>
                <div className='portfolio-field'>
                    {brands.map((item, index) => {
                        if (index >= 3 && index < 6) {
                            return (
                                <Link
                                    to={`/products/${item?.name}`}
                                    className='portfolio-element'>
                                    {item?.name}
                                </Link>
                            );
                        }
                    })}
                </div>
                <div className='portfolio-field'>
                    {brands.map((item, index) => {
                        if (index >= 6 && index < 9) {
                            return (
                                <Link
                                    to={`/products/${item?.name}`}
                                    className='portfolio-element'>
                                    {item?.name}
                                </Link>
                            );
                        }
                    })}
                </div>
                <div className='portfolio-field'>
                    {brands.map((item, index) => {
                        if (index >= 9 && index < 12) {
                            return (
                                <Link
                                    to={`/products/${item?.name}`}
                                    className='portfolio-element'>
                                    {item?.name}
                                </Link>
                            );
                        }
                    })}
                </div>
                <div className='portfolio-field'>
                    {brands.map((item, index) => {
                        if (index >= 12 && index < 15) {
                            return (
                                <Link
                                    to={`/products/${item?.name}`}
                                    className='portfolio-element'>
                                    {item?.name}
                                </Link>
                            );
                        }
                    })}
                </div>
                <div className='portfolio-field'>
                    {brands.map((item, index) => {
                        if (index >= 15 && index < 18) {
                            return (
                                <Link
                                    to={`/products/${item?.name}`}
                                    className='portfolio-element'>
                                    {item?.name}
                                </Link>
                            );
                        }
                    })}
                </div>
                <div className='portfolio-field portfolio-img'>
                    <img
                        src={
                            process.env.PUBLIC_URL + "/images/brand.png"
                        }></img>
                </div>
            </div>
        </div>
    ) : null;
};

export default Navigation;
