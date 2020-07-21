import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAdd } from '../../actions/gameActions';
import {
  partySocketCreate,
  partySocketJoin,
} from '../../actions/socketActions';

const FormSlide = ({ carouselEl, slideStatus }) => {
  const dispatch = useDispatch();
  const { socket } = useSelector((state) => ({
    ...state.socketReducer,
  }));

  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [formInput, setFormInput] = useState('');
  const [formLabel, setFormLabel] = useState('');
  const [formPlaceholder, setFormPlaceholder] = useState('');
  const [actionCreator, setActionCreator] = useState(null);

  useEffect(() => {
    switch (slideStatus) {
      case 'create': {
        setFormErrorMessage('party names must be at least 3 letters');
        setFormLabel('new party name');
        setFormPlaceholder('my party');
        setActionCreator(() => partySocketCreate);
        return;
      }
      case 'join': {
        setFormErrorMessage('invalid party code - try again');
        setFormLabel('enter party code');
        setFormPlaceholder('party code');
        setActionCreator(() => partySocketJoin);
        return;
      }
      case 'nickname': {
        setFormErrorMessage('nicknames must be at least 3 letters');
        setFormLabel('nickname');
        setFormPlaceholder('my nickname');
        setActionCreator(() => userAdd);
        return;
      }
      default: {
        setFormErrorMessage('party names must be at least 4 letters');
        setFormLabel('party name');
        setFormPlaceholder('my party');
        setActionCreator(() => partySocketCreate);
        return;
      }
    }
  }, [slideStatus]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    // if input is less than 3 characters, trigger error modal
    dispatch(actionCreator(socket, formInput));
    carouselEl.current.slickNext();
  };

  const prevSlide = () => {
    carouselEl.current.slickPrev();
  };

  return (
    <section className="form-slide">
      <button className="back-botton" onClick={prevSlide}>
        {'<back'}
      </button>
      <form onSubmit={onFormSubmit}>
        <label>
          {formLabel}
          <input
            onChange={(event) => {
              event.preventDefault();
              setFormInput(event.target.value);
            }}
            // onFocus={(e) => (e.target.placeholder = formInput || '')}
            // onBlur={(e) => (e.target.placeholder = formInput || "your party name")}
            placeholder={formPlaceholder}
            required
            type="text"
            value={formInput}
          />
        </label>
      </form>
    </section>
  );
};

export default FormSlide;
