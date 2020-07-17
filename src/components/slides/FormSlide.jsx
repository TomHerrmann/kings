import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userAdd, partyCreate, partyJoin } from '../../actions/partyActions';

const FormSlide = ({ carouselEl, carouselStatus }) => {
  const dispatch = useDispatch();

  const [formInput, setFormInput] = useState('');
  const [formLabel, setFormLabel] = useState('');
  const [formPlaceholder, setFormPlaceholder] = useState('');
  const [actionCreator, setActionCreator] = useState(null);

  useEffect(() => {
    switch (carouselStatus) {
      case 'create': {
        setFormLabel('party name');
        setFormPlaceholder('my party');
        setActionCreator(() => partyCreate);
        return;
      }
      case 'join': {
        setFormLabel('party name');
        setFormPlaceholder('my party');
        setActionCreator(() => partyJoin);
        return;
      }
      case 'nickname': {
        setFormLabel('nickname');
        setFormPlaceholder('my nickname');
        setActionCreator(() => userAdd);
        return;
      }
      default: {
        setFormLabel('party name');
        setFormPlaceholder('my party');
        setActionCreator(() => partyCreate);
        return;
      }
    }
  }, [carouselStatus]);

  const onFormSubmit = (e) => {
    e.preventDefault();
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
