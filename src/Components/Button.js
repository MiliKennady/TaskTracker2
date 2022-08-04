import React from "react";
import PropTypes from 'prop-types'

const Button = ({toggleAddButton, color, text}) => {
  return <button style={{backgroundColor:color}} className="btn" onClick={toggleAddButton} >{text}</button>;
};

Button.propTypes = {
    onClickMili : PropTypes.func
}

export default Button;
