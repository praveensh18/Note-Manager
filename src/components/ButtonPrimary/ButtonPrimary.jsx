import React from 'react';
import s from './style.module.css';

const ButtonPrimary = ({ children, onBtnClick, isDisabled }) => {
  return (
    <button
      disabled={isDisabled}
      type='button'
      onClick={onBtnClick}
      className={`btn btn-primary ${s.add_button}`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
