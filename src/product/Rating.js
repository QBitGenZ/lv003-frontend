import React, { useState } from "react";
import "./Rating.css";

const Rating = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const handleMouseEnter = (index) => {
        setHoverRating(index);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    const handleClick = (index) => {
        setRating(index);
    };

    return (
        <div className='rating'>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;

                return (
                    <label key={index}>
                        <input
                            type='radio'
                            name='rating'
                            value={ratingValue}
                            onClick={() => handleClick(ratingValue)}
                        />
                        <i
                            className={
                                ratingValue <= (hoverRating || rating)
                                    ? "fa-solid fa-star fa-2xs"
                                    : "fa-regular fa-star fa-2xs"
                            }
                            style={{ color: "#FFD43B" }}
                            onMouseEnter={() => handleMouseEnter(ratingValue)}
                            onMouseLeave={handleMouseLeave}></i>
                    </label>
                );
            })}
        </div>
    );
};

export default Rating;
