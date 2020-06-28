import React from 'react';
import { useStore } from 'react-redux';

const LoadingIcon = () => {
  const store = useStore();
  const { isLoading } = store.getState();

  return (
    <div className="loading-icon">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingIcon;
