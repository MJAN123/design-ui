import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class Google2fa extends Component {
  handleRoute = (route) => {
    this.props.history.push(route);
  };
  render() {
    return (
      <div className='google-2fa-container'>
        <div className='verification'>
          <div className='title'>Verification</div>
          <div className='qr-scan'>
            <div>PUT QR HERE</div>
          </div>

          <div className='form-container'>
            <div className='form-field'>
              <input type='password' placeholder='••••••••••••' />
            </div>

            <div className='button'>
              <button
                type='submit'
                onClick={() => this.handleRoute('/userForm')}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Google2fa);
