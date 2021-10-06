import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Link
} from "react-router-dom";

function slider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    return (
        <Carousel {...settings}>
            <Link to="/movie">
                <Wrap>
                    <img src="/images/poster1.jpg" alt="Movie Poster" />
                    {/* <iframe src="https://www.youtube.com/embed/3KR8_igDs1Y?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=0" frameborder="0" allow="autoplay"></iframe> */}
                </Wrap>
            </Link>
            <Link to="/movie">
                <Wrap>
                    <img src="/images/poster2.jpg" alt="Movie Poster" />
                </Wrap>
            </Link>
            <Link to="/movie">
                <Wrap>
                    <img src="/images/poster3.jpg" alt="Movie Poster" />
                </Wrap>
            </Link>
        </Carousel>
    )
}

export default slider

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }


`

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    img {
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;
        width: 100%;
        height: 100%;
    }

    &:hover {
        padding: 0;
        border: 4px solid rgba(249, 249, 249, 0.8);
        transition-duration: 300ms;
    }
`
