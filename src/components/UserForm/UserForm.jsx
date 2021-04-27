import React from 'react';
import { emailValidator, passwordValidator } from '../../utils/design.constant';

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
      userIdError: '',
      fullNameError: '',
      countryError: '',
      cityError: '',
      streetError: '',
      unitError: '',
      'postal-codeError': '',
      phoneError: '',
      dobError: '',
      genderError: '',
      emailError: '',
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

  handleBlur = (event) => {
    const { name } = event.target;
    this.validateField(name);
    return;
  };

  handleSubmit = (event) => {
    // event.preventDefault();
    // let formFileds = [
    //   'userId',
    //   'fullName',
    //   'country',
    //   'city',
    //   'street',
    //   'unit',
    //   'postal-code',
    //   'phone',
    //   'dob',
    //   'gender',
    //   'email',
    // ];
    // let isValid = true;
    // formFileds.forEach((field) => {
    //   isValid = this.validateField(field) && isValid;
    // });
    // if (isValid) this.setState({ isFormSubmitted: true });
    // else this.setState({ isFormSubmitted: false });
    // return this.state.isFormSubmitted;
  };

  // validateFirstName() {
  //   let firstNameError = '';
  //   const value = this.state.firstName;
  //   if (value.trim() === '') firstNameError = 'First Name is required';

  //   this.setState({
  //     firstNameError,
  //   });
  //   return firstNameError === '';
  // }

  // validateLastName() {
  //   let lastNameError = '';
  //   const value = this.state.lastName;
  //   if (value.trim() === '') lastNameError = 'Last Name is required';

  //   this.setState({
  //     lastNameError,
  //   });
  //   return lastNameError === '';
  // }

  // validateEmailAddress() {
  //   let emailAddressError = '';
  //   const value = this.state.emailAddress;
  //   if (value.trim === '') emailAddressError = 'Email Address is required';
  //   else if (!emailValidator.test(value))
  //     emailAddressError = 'Email is not valid';

  //   this.setState({
  //     emailAddressError,
  //   });
  //   return emailAddressError === '';
  // }

  // validatePassword() {
  //   let passwordError = '';
  //   const value = this.state.password;
  //   if (value.trim === '') passwordError = 'Password is required';
  //   else if (!passwordValidator.test(value))
  //     passwordError =
  //       'Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!';

  //   this.setState({
  //     passwordError,
  //   });
  //   return passwordError === '';
  // }

  // validatePasswordConfirmation() {
  //   let passwordConfirmationError = '';
  //   if (this.state.password !== this.state.passwordConfirmation)
  //     passwordConfirmationError = 'Password does not match Confirmation';

  //   this.setState({
  //     passwordConfirmationError,
  //   });
  //   return passwordConfirmationError === '';
  // }

  render() {
    return (
      // Rendering the entire form here
      <div className='user-form-container'>
        {this.state.isFormSubmitted ? (
          <div className='details-container'>
            <h3>Thanks for signing up, find your details below:</h3>
            <div>First Name: {this.state.firstName}</div>
            <div>Last Name: {this.state.lastName}</div>
            <div>Email Address: {this.state.emailAddress}</div>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div className='form-container'>
              <div className='form-group'>
                <div className='input'>
                  <input
                    type='text'
                    placeholder='User Id *'
                    name='user id'
                    value={this.state.Error}
                    onChange={this.handlErroreChange}
                    onBlur={this.handleErrorBlur}
                    autoComplete='off'
                  />
                  <br />
                  {this.state.userId && (
                    <div className='error-message'>{this.state.userId}</div>
                  )}
                </div>
                <div className='input'>
                  <input
                    type='text'
                    placeholder='Full Name *'
                    name='fullname'
                    value={this.state.fullName}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    autoComplete='off'
                  />
                  <br />
                  {this.state.fullName && (
                    <div className='error-message'>{this.state.fullName}</div>
                  )}
                </div>
              </div>
              <div className='form-group'>
                <div className='input'>
                  <input
                    type='email'
                    placeholder='Country *'
                    name='emailAddress'
                    value={this.state.country}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    autoComplete='off'
                  />
                  <br />
                  {this.state.countryError && (
                    <div className='error-message'>
                      {this.state.countryError}
                    </div>
                  )}
                </div>
                <div className='input'>
                  <input
                    type='text'
                    placeholder='City'
                    name='city'
                    value={this.state.city}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    autoComplete='off'
                  />
                  <br />
                  {this.state.cityError && (
                    <div className='error-message'>{this.state.cityError}</div>
                  )}
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
                <br />
                {this.state.streetError && (
                  <div className='error-message'>{this.state.streetError}</div>
                )}
              </div>
              <div className='form-group'>
                <div className='input'>
                  <input
                    type='number'
                    placeholder='Unit *'
                    name='user id'
                    value={this.state.unit}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    autoComplete='off'
                  />
                  <br />
                  {this.state.unitError && (
                    <div className='error-message'>{this.state.unitError}</div>
                  )}
                </div>
                <div className='input'>
                  <input
                    type='number'
                    placeholder='Postal code *'
                    name='postal-code'
                    value={this.state.postalCode}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    autoComplete='off'
                  />
                  <br />
                  {this.state.postalCodeError && (
                    <div className='error-message'>
                      {this.state.postalCodeError}
                    </div>
                  )}
                </div>
              </div>
              <div className='form-group'>
                <div className='input'>
                  <input
                    type='number'
                    placeholder='Ph# No'
                    name='phone'
                    value={this.state.phone}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    autoComplete='off'
                  />
                  <br />
                  {this.state.phoneError && (
                    <div className='error-message'>{this.state.phoneError}</div>
                  )}
                </div>
                <div className='input'>
                  <input
                    type='text'
                    placeholder='Date of birth'
                    name='dob'
                    value={this.state.dob}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={(this.type = 'date')}
                    autoComplete='off'
                  />
                  <br />
                  {this.state.dobError && (
                    <div className='error-message'>{this.state.dobError}</div>
                  )}
                </div>
              </div>
              <div className='input-radio'>
                <label for='male'>Male</label>
                <br />
                <input
                  type='radio'
                  name='gender'
                  value={this.state.gender}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete='off'
                />
                <label for='male'>Female</label>
                <br />
                <input
                  type='radio'
                  name='gender'
                  value={this.state.gender}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete='off'
                />
                <br />
                {this.state.genderError && (
                  <div className='error-message'>{this.state.genderError}</div>
                )}
              </div>
              <div className='input'>
                <input
                  type='text'
                  placeholder='Email'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete='off'
                />
                <br />
                {this.state.emailError && (
                  <div className='error-message'>{this.state.emailError}</div>
                )}
              </div>
              <div className='submit-btn'>
                <button>Submit</button>
              </div>
            </div>
          </form>
        )}
      </div>
    );
  }
}
export default UserForm;
