import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useContext } from 'react';
import { themeContext } from '../../context/context';
 

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="portfolioContainer" id="portfolio">
        <span style={{color: darkmode? 'white' :''}}>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper 
            spaceBetween={50}
            slidesPerView={3}
            grabCursor={true}
            onSlideChange={() => {}}
            className="portfolio-slider"
            >
        
            <SwiperSlide><img src="./images/musicapp.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./images/sidebar.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./images/hoc.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./images/ecommerce.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="./images/sidebar.png" alt="" /></SwiperSlide>
            
      
    </Swiper>
    </div>
  )
}

export default Portfolio