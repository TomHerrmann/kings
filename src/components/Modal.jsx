import React from 'react';
import ReactModal from 'react-modal';
import { useDispatch, useStore } from 'react-redux';
// import {} from '../actions/actions';

import FormModal from './Modals/FormModal.jsx';
import WelcomeModal from './Modals/WelcomeModal.jsx';

ReactModal.setAppElement('#root');

const Modal = () => {
  const store = useStore();
  const { modalOpen, modalStatus } = store.getState();

  const renderModalContent = () => {
    return modalStatus === 'welcome' ? <WelcomeModal /> : <FormModal />;
  };

  return (
    <ReactModal
      className="modal-content"
      isOpen={modalOpen}
      overlayClassName="modal-overlay"
    >
      {/* {renderModalContent()} */}
      <WelcomeModal />
      <FormModal modalStatus={modalStatus} />
      <FormModal modalStatus="nickname" />
    </ReactModal>
  );
};

export default Modal;
