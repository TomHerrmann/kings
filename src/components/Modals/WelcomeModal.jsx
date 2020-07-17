import React from 'react';
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import { modalSelect } from '../../actions/actions';

const WelcomeModal = () => {
  return (
    <section className="welcome-modal">
      <button
        onClick={() => {
          dispatch(modalSelect('create'));
        }}
      >
        start a party
      </button>
      <button
        onClick={() => {
          dispatch(modalSelect('join'));
        }}
      >
        join a party
      </button>
    </section>
  );
};

export default WelcomeModal;
