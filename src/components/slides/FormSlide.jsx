import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAdd, partyCreate, partyJoin } from '../../actions/partyActions';

const FormSlide = ({ carouselEl, carouselStatus }) => {
  const dispatch = useDispatch();
  const { socket } = useSelector((state) => ({ ...state.socketReducer }));
  console.log('form rendering');

  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [formInput, setFormInput] = useState('');
  const [formLabel, setFormLabel] = useState('');
  const [formPlaceholder, setFormPlaceholder] = useState('');
  const [actionCreator, setActionCreator] = useState(null);

  useEffect(() => {
    switch (carouselStatus) {
      case 'create': {
        setFormErrorMessage('party names must be at least 3 letters');
        setFormLabel('new party name');
        setFormPlaceholder('my party');
        setActionCreator(() => partyCreate);
        return;
      }
      case 'join': {
        setFormErrorMessage('invalid party code - try again');
        setFormLabel('enter party code');
        setFormPlaceholder('party code');
        setActionCreator(() => partyJoin);
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
        setActionCreator(() => partyCreate);
        return;
      }
    }
  }, [carouselStatus]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    // if input is less than 3 characters, trigger error modal
    dispatch(actionCreator(formInput));
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
