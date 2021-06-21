import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../scss/coverslider.scss';


export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div className="cover_bg">
                <img
                    src="https://lumiere-a.akamaihd.net/v1/images/image_f2047e61.jpeg?region=0%2C0%2C1800%2C968"
                    className="d-block w-100"
                    alt="..."
                />
                <h3>1A</h3>
            </div>
            <div className="cover_bg">
                <img src="https://lumiere-a.akamaihd.net/v1/images/image_f2047e61.jpeg?region=0%2C0%2C1800%2C968" className="d-block w-100 image_cover_slider" alt="..." />

                <h3>2</h3>
            </div>
            <div className="cover_bg">
                <img
                    src="https://lumiere-a.akamaihd.net/v1/images/image_f2047e61.jpeg?region=0%2C0%2C1800%2C968"
                    className="d-block w-100"
                    alt="..."
                />
                <h3>3</h3>
            </div>
            <div className="cover_bg">
                <img
                    src="https://lumiere-a.akamaihd.net/v1/images/image_f2047e61.jpeg?region=0%2C0%2C1800%2C968"
                    className="d-block w-100"
                    alt="..."
                />
                <h3>4</h3>
            </div>
            <div className="cover_bg">
                <img
                    src="https://lumiere-a.akamaihd.net/v1/images/image_f2047e61.jpeg?region=0%2C0%2C1800%2C968"
                    className="d-block w-100"
                    alt="..."
                />
                <div className="coverslider_detail">

                    <h1 className="coverslider_title">X MAN APOCA</h1>
                    <div>
                    <a className="btn btn-outline-light btn-lg m-2" role="button" rel="nofollow" target="_blank"> SHOP NOW</a>
                    <a className="btn btn-outline-light btn-lg m-2" href="#" target="_blank" role="button" >WATCH TRAILER</a>
                    </div>
                </div>
            </div>






            <div className="cover_bg">
                <div id="intro" className="bg-image w-100 shadow-1-strong secttioncover">

                    <img
                        //  src="https://lumiere-a.akamaihd.net/v1/images/20cs_xmen_dark_phoenix_hero_banner_b26f8933.jpeg"

                        src="https://lumiere-a.akamaihd.net/v1/images/image_f2047e61.jpeg?region=0%2C0%2C1800%2C968"

                        className="d-block w-100"
                        alt="..."
                    />




                    <div className="mask d-flex justify-content-evenly" >
                        {/* 


src="https://lumiere-a.akamaihd.net/v1/images/image_f2047e61.jpeg?region=0%2C0%2C1800%2C968" */}

                        <div className="container-fluid covercontainer d-flex align-items-center justify-content-center text-center h-20">
                            <div className="justify-content-center text-white">
                                <h1 className="mb-0">efefefefef</h1>
                                <h5 className="mb-2"> fefefefef <i className="bx bx-user"></i>&nbsp;fefe&nbsp;&nbsp;   <i className="bx bx-heart"></i>&nbsp;fefef  efef f</h5>





                                <a
                                    className="btn btn-outline-light btn-lg m-2"

                                    role="button"
                                    rel="nofollow"
                                    target="_blank"
                                >SHOP NOW</a
                                >
                                <a



                                    className="btn btn-outline-light btn-lg m-2"
                                    href="#"
                                    target="_blank"
                                    role="button"
                                >WATCH TRAILER</a
                                >
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Slider>
    );
}