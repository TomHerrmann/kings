import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';

import FormSlide from './slides/FormSlide.jsx';
import WelcomeSlide from './slides/WelcomeSlide.jsx';

const Carousel = () => {
  const { slideStatus } = useSelector((state) => state.partyReducer);
  const carouselEl = useRef();

  const sliderSettings = {
    arrows: false,
    className: 'carousel',
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider ref={carouselEl} {...sliderSettings}>
      <WelcomeSlide carouselEl={carouselEl} />
      <FormSlide carouselEl={carouselEl} slideStatus={slideStatus} />
      <FormSlide carouselEl={carouselEl} slideStatus="nickname" />
    </Slider>
  );
};

export default Carousel;
