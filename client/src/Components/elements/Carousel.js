import React from 'react';

function Carousel() {
    return (

        /*Boot Strap SlideShow
        set id  and className of carousel, (data-ride carousel) waits for the page to load before animating , (data-interveral set to 5 thousands miliseconds=5 seconds )is the time it stays on one slide till rotates
        (data-pause )set to false sets it so when even mouse cursor is on slider it doesnt pause the slider rotating it keeps running*/
        
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="5000" data-pause="false">
                <div className="carousel-inner">
      
                    {/*(carousel-item active)one carousel-item slide has to be set to active in order to be visiable/ when page load slider needs to be visiable and active*/}
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://images-na.ssl-images-amazon.com/images/I/71qfx5e5iNL._SL1500_.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://ae01.alicdn.com/kf/HTB167vBKXXXXXbfXFXXq6xXFXXXc/New-Cool-Black-Ink-Metal-Ballpoint-Pen-Aviation-Aluminum-Alloy-Anti-slip-Self-Defense-Tactical-Pen.jpg_640x640.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://images-na.ssl-images-amazon.com/images/I/51%2BkuA2VmnL._SL1000_.jpg" alt="Third slide" />
                    </div>
                </div>
            </div>
            <div className="carousel-slider"></div>
        </div>
    )
}


export default Carousel;