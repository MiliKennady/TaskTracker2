import React from "react";
import PropTypes from 'prop-types'

const Button = ({onClickMili}) => {
  return <button className="btn" onClick={onClickMili}>Add</button>;
};

Button.propTypes = {
    onClickMili : PropTypes.func
}

export default Button;
