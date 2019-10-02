import React from 'react';

// made a functional component called carousel that returns my bootstrap slideshow
/*function Carousel() {
    return (*/

/*Boot Strap SlideShow
set id  and className of carousel, (data-ride carousel) waits for the page to load before animating , (data-interveral set to 5 thousands miliseconds=5 seconds )is the time it stays on one slide till rotates
(data-pause )set to false sets it so when even mouse cursor is on slider it doesnt pause the slider rotating it keeps running*/



function Carousel() {
    return (

        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="5000">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    {/* <img className="d-block w-100" src="https://images-na.ssl-images-amazon.com/images/I/71qfx5e5iNL._SL1500_.jpg" alt="First slide" /> */}
                    <img className="d-block w-100" src="https://images-na.ssl-images-amazon.com/images/I/71qfx5e5iNL._SL1500_.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://ae01.alicdn.com/kf/HTB167vBKXXXXXbfXFXXq6xXFXXXc/New-Cool-Black-Ink-Metal-Ballpoint-Pen-Aviation-Aluminum-Alloy-Anti-slip-Self-Defense-Tactical-Pen.jpg_640x640.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://images-na.ssl-images-amazon.com/images/I/51%2BkuA2VmnL._SL1000_.jpg" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

    )
}
export default Carousel;