import React from 'react';
import { useDispatch } from 'react-redux';
import { slideSelect } from '../../actions/partyActions';

const WelcomeSlide = ({ carouselEl }) => {
  const dispatch = useDispatch();

  const nextSlide = () => {
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
