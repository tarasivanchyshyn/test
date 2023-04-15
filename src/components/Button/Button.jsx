import React from 'react';
import classes from './Button.module.scss';

function Button({ type, style, secondary, onClick, children }) {
  const btnClass = secondary ? classes.buttonSecondary : classes.buttonMain;

  return (
    <button type={type} style={style} className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
