import React from 'react';
import "./Button.css";

const Button = props => {
  const classes = ["Button", "Button_" + props.type];

  return (
      <button
          className={classes.join(' ')}
          onClick={props.onClick}
      >{props.label}</button>
  );
};

export default Button;