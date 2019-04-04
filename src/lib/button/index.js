import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    return (
      <div className="" onClick={this.props.onClick}>
        {this.props.value}
      </div>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
};
