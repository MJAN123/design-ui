import React, { Component } from 'react';

export default class CustomButton extends Component {
  render() {
    return (
      <div className={`btn ${this.props.className}`}>
        <button
          type='button'
          onClick={this.props.handleClick}
          disabled={this.props.disabled}
        >
          {this.props.btnText}
        </button>
      </div>
    );
  }
}
