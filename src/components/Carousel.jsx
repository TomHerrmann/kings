import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useStore } from 'react-redux';

import FormSlide from './slides/FormSlide.jsx';
import WelcomeSlide from './slides/WelcomeSlide.jsx';

const Carousel = () => {
  const store = useStore();
  const { carouselStatus } = store.getState();
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
      {/* {renderCarouselContent()} */}
      <WelcomeSlide carouselEl={carouselEl} />
      <FormSlide carouselEl={carouselEl} carouselStatus={carouselStatus} />
      <FormSlide carouselEl={carouselEl} carouselStatus="nickname" />
    </Slider>
  );
};

export default Carousel;
