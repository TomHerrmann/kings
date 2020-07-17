import React from 'react';
import { useDispatch } from 'react-redux';
import { slideSelect, cardsGet } from '../../actions/actions';

const WelcomeSlide = ({ carouselEl }) => {
  const dispatch = useDispatch();

  const nextSlide = () => {
    console.log('ref -> ', carouselEl);
    carouselEl.current.slickNext();
  };

  return (
    <section className="welcome-slide">
      <button
        onClick={() => {
          dispatch(slideSelect('create'));
          nextSlide();
        }}
      >
        start a party
      </button>
      <button
        onClick={() => {
          dispatch(slideSelect('join'));
          nextSlide();
        }}
      >
        join a party
      </button>
    </section>
  );
};

export default WelcomeSlide;
