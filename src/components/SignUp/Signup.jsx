import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { emailValidator, passwordValidator } from '../../utils/design.constant';

export class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });

    return;
  };

  validateEmailAddress() {
    let emailError = '';
    const value = this.state.email;
    if (value.trim === '') emailError = 'Email Address is required';
    else if (!emailValidator.test(value)) emailError = 'Email is not valid';

    this.setState({
      emailError,
    });
    return emailError === '';
  }

  validatePassword() {
    let passwordError = '';
    const value = this.state.password;
    if (value.trim === '') passwordError = 'Password is required';
    else if (!passwordValidator.test(value))
      passwordError =
        'Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!';

    this.setState({
      passwordError,
    });
    return passwordError === '';
  }
  handleSubmit = () => {
    if (this.validateEmailAddress() && this.validatePassword()) {
      this.props.history.push('/login');
    } else {
      render();
    }
  };
  // Handle Route
  handleRoute = () => {
    this.props.history.push('/login');
  };
  render() {
    return (
      <div className='signup-container'>
        <div className='register'>
          <div className='icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='site__logo'
              width='56'
              height='84'
              viewBox='77.7 214.9 274.7 412'
            >
              <defs>
                <linearGradient id='a' x1='0%' y1='0%' y2='0%'>
                  <stop offset='0%' stop-color='#8ceabb' />
                  <stop offset='100%' stop-color='#378f7b' />
                </linearGradient>
              </defs>
              <path
                fill='url(#a)'
                d='M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z'
              />
            </svg>
          </div>
          <h2>Sign Up</h2>

          <div className='form-container'>
            <div className='form-field'>
              {this.state.emailError && (
                <div className='error-message'>{this.state.emailError}</div>
              )}
              <input
                type='email'
                name='email'
                placeholder='info@mailaddress.com'
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>

            <div className='form-field'>
              {this.state.passwordError && (
                <div className='error-message'>{this.state.passwordError}</div>
              )}
              <input
                name='password'
                type='password'
                placeholder='••••••••••••'
                onChange={this.handleChange}
                value={this.state.password}
              />
            </div>

            <div className='button'>
              <button type='submit' onClick={this.handleSubmit}>
                Sign Up
              </button>
            </div>
          </div>
          <div className='login-signup-switch'>
            <p>
              Already have an accout?{' '}
              <span onClick={this.handleRoute}>Log in</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
