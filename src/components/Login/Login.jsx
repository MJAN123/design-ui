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
          {/* <div className='icon'>
            <svg width="118pt" height="50pt" viewBox="0 0 530 225"  xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" y2="0%"><stop offset="0%" stop-color="#8ceabb"></stop><stop offset="100%" stop-color="#378f7b"></stop></linearGradient>
              </defs>
              <path d="m400 0c-57.007812 0-118.257812 59.519531-144 87.664062-25.742188-28.144531-86.992188-87.664062-144-87.664062-70.128906 0-112 41.871094-112 112s41.871094 112 112 112c57.007812 0 118.257812-59.519531 144-87.664062 25.742188 28.144531 86.992188 87.664062 144 87.664062 70.128906 0 112-41.871094 112-112s-41.871094-112-112-112zm-288 192c-53.070312 0-80-26.910156-80-80s26.929688-80 80-80c42.480469 0 96.910156 50.945312 122.960938 80-26.015626 29.089844-80.386719 80-122.960938 80zm288 0c-42.480469 0-96.910156-50.945312-122.960938-80 26.015626-29.089844 80.386719-80 122.960938-80 53.070312 0 80 26.910156 80 80s-26.929688 80-80 80zm0 0" fill="url(#grad1)" />
            </svg>
          </div> */}
          <h2>Infinity</h2>

          <div className='form-container'>
            <div className='form-field'>
              <input type='email' placeholder='UserId' />
            </div>

            <div className='form-field'>
              <input type='password' placeholder='••••••••••••' />
            </div>

            <div className='button'>
              <button
                type='submit'
                onClick={() => this.handleRoute('/google-2fa')}
                // onClick={() => console.log('hello')}
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
