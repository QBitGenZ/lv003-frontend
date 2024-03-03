import "./Banner.css";
import { React, useEffect, useState } from "react";

const Banner = (props) => {
    const SliderProperty = {
        ImageNo: "",
        ImageName: "",
        ImageSrc: "",
    };

    const [sliderProperty, setSliderProperty] = useState(SliderProperty);

    const { ImageNo, ImageName, ImageSrc } = sliderProperty;

    const [count, setCount] = useState(0);

    const [animationCls, setAnimationCls] = useState("displayBlock fade");

    const NextClick = () => {
        setAnimationCls(() => "displayBlock fade");

        const myTimeout = setTimeout(() => {
            setAnimationCls("displayBlock fade");
        }, 100);

        if (count <= props.ImageData.length - 1) {
            setCount(count + 1);
        }

        if (count === props.ImageData.length - 1) {
            setCount(0);
        }
    };

    useEffect(() => {
        setSliderProperty((previous) => ({
            ...previous,
            ImageNo: props.ImageData[count].ImageNo,
            ImageName: props.ImageData[count].ImageName,
            ImageSrc: props.ImageData[count].ImageSrc,
        }));
    });

    useEffect(() => {
        const interval = setInterval(() => {
            NextClick();
        }, props.SlideIntervalTime);

        return () => clearInterval(interval);
    }, [count]);

    return (
        <>
            <div className='slideshow-container'>
                <div className={animationCls}>
                    <img
                        src={ImageSrc}
                        className='imageStyle'
                        alt='banner'></img>
                </div>
            </div>
        </>
    );
};

export default Banner;
