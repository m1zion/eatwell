import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NoticiasSlide.scss';
import noticias1 from '@images/noticias1.jpg';
import noticias2 from '@images/noticias2.jpg';
import noticias3 from '@images/noticias3.jpg';
import { Box, Typography } from '@mui/material';
function NoticiasSlide() {
    const [imagenBanners,setImagenBanners] = useState([]);
    const settings = {
        dots: true,
        //infinite: true,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        draggable: true,
        centerMode: false,
        /*lazyLoad: 'progressive', //It could also be ondemand*/
        responsive: [
            {
            breakpoint: 900,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,                
                centerMode: true,
            }
            }
        ],
    };
    useEffect(() => { // Simulating API data using local images
        const localBanners = [
        { id: 1, imagen: noticias1 },
        { id: 2, imagen: noticias2 },
        { id: 3, imagen: noticias3 },
        ];
        setImagenBanners(localBanners);
    }, []);
  return (
    <Box className="MainSlide">
        {imagenBanners.length===0?(
            <Typography>Loading</Typography>
        ):(
            <Slider {...settings}>
                {
                    imagenBanners.map(slide => (
                    <img className="slick-slide-image-a" src={slide.imagen} key={slide.id} />
                    ))
                }
            </Slider>
        )}
    </Box>
  );
}
export default NoticiasSlide;


