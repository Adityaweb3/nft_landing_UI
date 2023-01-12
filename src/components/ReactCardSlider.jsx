import React from 'react';
import './Slider.css';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
const ReactCardSlider = (props) => {
    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    return (
        <>
            <div className="mt-2 mx-4">
                <p className="text-4xl font-bold w-96 shadow-lg shadow-pink-500/50 text-white">
                    Project you will love
                </p>
            </div>
            <div id="main-slider-container">
                {/* <div className="">
                <h3>Project you will love</h3>
            </div> */}
                <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft} />
                <div id="slider">
                    {
                        props.slides.map((slide, index) => {
                            return (
                                <div className="slider-card" key={index} onClick={() => slide.clickEvent()}>
                                    <div className="slider-card-image" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}></div>
                                    <p className="slider-card-title">{slide.title}</p>
                                    <p className="slider-card-description">{slide.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <MdChevronRight size={40} className="slider-icon right" onClick={slideRight} />
            </div>
        </>
    )
}
export default ReactCardSlider;