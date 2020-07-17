import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userAdd, partyCreate, partyJoin } from '../../actions/actions';

const FormModal = ({ modalStatus }) => {
  const dispatch = useDispatch();

  const [formInput, setFormInput] = useState('');
  const [formLabel, setFormLabel] = useState('');
  const [formPlaceholder, setFormPlaceholder] = useState('');
  const [actionCreator, setActionCreator] = useState(null);

  console.log('modalStatus in form -> ', modalStatus);

  useEffect(() => {
    switch (modalStatus) {
      case 'create': {
        setFormLabel('party name');
        setFormPlaceholder('my party');
        setActionCreator(partyCreate);
        return;
      }
      case 'join': {
        setFormLabel('party name');
        setFormPlaceholder('my party');
        setActionCreator(partyJoin);
        return;
      }
      case 'nickname': {
        setFormLabel('nickname');
        setFormPlaceholder('my nickname');
        setActionCreator(userAdd);
        return;
      }
    }
  }, [modalStatus]);

  const onFormSubmit = () => {
    dispatch(actionCreator(formInput));
  };

  return (
    <section className="modal-form">
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
        <button>{'<back'}</button>
        <button>{'next >'}</button>
      </form>
    </section>
  );
};

export default FormModal;
