import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
class UserForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      fullName: '',
      country: '',
      city: '',
      street: '',
      unit: '',
      'postal-code': '',
      phone: '',
      dob: '',
      gender: '',
      email: '',
      error: false,
      isFormSubmitted: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });

    return;
  };

  handleFormSubmit = () => {
    let isValid = true;
    let formData = this.state;

    Object.entries(formData).map(function ([key, value]) {
      if (value === '') {
        isValid = false;
      }
    });
    if (isValid) {
      this.props.history.push('/landing-Page');
    } else {
      this.setState({
        error: true,
      });
      render();
    }
  };
  render() {
    return (
      // Rendering the entire form here
      <div className='user-form-container'>
        <div className='form-container'>
          <div className='form-title'>Complete Your Profile</div>
          <div className='form-group'>
            <div className='input'>
              <input
                type='text'
                placeholder='User Id *'
                name='userId'
                value={this.state.userId}
                onChange={this.handleChange}
                autoComplete='off'
              />
            </div>
            <div className='input'>
              <input
                type='text'
                placeholder='Full Name *'
                name='fullName'
                value={this.state.fullName}
                onChange={this.handleChange}
                autoComplete='off'
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='input'>
              <input
                type='text'
                placeholder='Country *'
                name='country'
                value={this.state.country}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete='off'
              />
            </div>
            <div className='input'>
              <input
                type='text'
                placeholder='City*'
                name='city'
                value={this.state.city}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete='off'
              />
            </div>
          </div>

          <div className='input'>
            <input
              type='text'
              placeholder='Street *'
              name='street'
              value={this.state.street}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete='off'
            />
          </div>
          <div className='form-group'>
            <div className='input'>
              <input
                type='number'
                placeholder='Unit *'
                name='unit'
                value={this.state.unit}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete='off'
              />
            </div>
            <div className='input'>
              <input
                type='number'
                placeholder='Postal Code *'
                name='postal-code'
                value={this.state.postalCode}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete='off'
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='input'>
              <input
                type='number'
                placeholder='Ph# No*'
                name='phone'
                value={this.state.phone}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete='off'
              />
            </div>
            <div className='input'>
              <input
                type='text'
                placeholder='Date of Birth'
                name='dob'
                value={this.state.dob}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                onFocus={(this.type = 'date')}
                autoComplete='off'
              />
            </div>
          </div>
          <div className='input-radio'>
            <RadioGroup
              aria-label='gender'
              name='gender'
              value={this.state.gender}
              onChange={this.handleChange}
            >
              <FormControlLabel
                value='female'
                control={<Radio />}
                label='Female'
              />
              <FormControlLabel value='male' control={<Radio />} label='Male' />
            </RadioGroup>
          </div>
          <div className='input'>
            <input
              type='text'
              placeholder='Email*'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
              autoComplete='off'
            />
          </div>
          {this.state.error && (
            <div className='error-message'>
              Please verify all the fields before you submit...
            </div>
          )}
          <div className='submit-btn'>
            <button onClick={this.handleFormSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(UserForm);
