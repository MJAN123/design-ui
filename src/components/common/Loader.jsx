import React, { Component } from 'react';

export default class InpuField extends Component {
  render() {
    return (
      <div className='loader-container'>
        <img src={require('../../assets/images/Bounce-Bar-Preloader-1.gif')} />
      </div>
    );
  }
}
