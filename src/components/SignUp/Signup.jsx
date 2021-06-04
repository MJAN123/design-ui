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
          {/* <div className='icon'>
            <svg width="118pt" height="50pt" viewBox="0 0 530 225" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" y2="0%"><stop offset="0%" stop-color="#8ceabb"></stop><stop offset="100%" stop-color="#378f7b"></stop></linearGradient>
              </defs>
             <path d="m400 0c-57.007812 0-118.257812 59.519531-144 87.664062-25.742188-28.144531-86.992188-87.664062-144-87.664062-70.128906 0-112 41.871094-112 112s41.871094 112 112 112c57.007812 0 118.257812-59.519531 144-87.664062 25.742188 28.144531 86.992188 87.664062 144 87.664062 70.128906 0 112-41.871094 112-112s-41.871094-112-112-112zm-288 192c-53.070312 0-80-26.910156-80-80s26.929688-80 80-80c42.480469 0 96.910156 50.945312 122.960938 80-26.015626 29.089844-80.386719 80-122.960938 80zm288 0c-42.480469 0-96.910156-50.945312-122.960938-80 26.015626-29.089844 80.386719-80 122.960938-80 53.070312 0 80 26.910156 80 80s-26.929688 80-80 80zm0 0" fill="url(#grad1)"/>
            </svg>
          </div> */}
          <h2>Infinity</h2>

          <div className='form-container'>
            <div className='form-field'>
              {this.state.emailError && (
                <div className='error-message'>{this.state.emailError}</div>
              )}
              <input
                type='email'
                name='email'
                placeholder='Valid email address'
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
              Already have an account?{' '}
              <span onClick={this.handleRoute}>Log in</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
