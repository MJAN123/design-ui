import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
export class Login extends Component {
  // Handle Route
  handleRoute = (route) => {
    this.props.history.push(route);
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
          <h2>Log in</h2>

          <div className='form-container'>
            <div className='form-field'>
              <input type='email' placeholder='info@mailaddress.com' />
            </div>

            <div className='form-field'>
              <input type='password' placeholder='••••••••••••' />
            </div>

            <div className='button'>
              <button
                type='submit'
                onClick={() => this.handleRoute('/google-2fa')}
              >
                Login
              </button>
            </div>
          </div>
          <div className='login-signup-switch'>
            <p>
              Create New Account!{' '}
              <span onClick={() => this.handleRoute('/')}>Sign up</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
