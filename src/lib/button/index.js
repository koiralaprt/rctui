import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
export default class Button extends Component {
  render() {
    return (
      <button className="rct-btn" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
};
