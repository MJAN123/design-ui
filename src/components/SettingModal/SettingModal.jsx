import { Button, Divider } from '@material-ui/core';
import React, { Component } from 'react';
import EditIcon from '../Common/Icons/EditIcon';
import DeleteIcon from '../Common/Icons/DeleteIcon';
import AddIcon from '../Common/Icons/AddIcon';
import SaveIcon from '../Common/Icons/SaveIcon';
export default class SettingModal extends Component {
  constructor() {
    super();
    this.state = {
      password: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',

        isValid: false,
      },
      bank: {
        bankAcc: '',
        edit: false,
        delete: false,
        addNew: false,
      },
      address: {
        address: '',
        addressType: '',
        edit: false,
        delete: false,
        addNew: false,
      },
    };
  }
  render() {
    return (
      <div className='setting-modal-container'>
        <div className='modal-content'>
          <div className='reset-password-section'>
            <div className='section-title'>Change Password</div>
            <div className='section-body'>
              <div className='prev-password'>
                <input
                  type='password'
                  placeholder='Current Password*'
                  name='oldPassword'
                  value={this.state.password.oldPassword}
                  onChange={this.handleChange}
                  autoComplete='off'
                />
              </div>
              <div className='new-password'>
                <input
                  type='password'
                  placeholder='New Password*'
                  name='newPassword'
                  value={this.state.newPassword}
                  autoComplete='off'
                />
              </div>
              <div className='confirm-password'>
                <input
                  type='password'
                  placeholder='Confirm Password*'
                  name='confirmPassword'
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                  autoComplete='off'
                />
              </div>
            </div>
            <div className='section-action'>
              <span>Save</span>
            </div>
          </div>
          <Divider />
          <div className='bank-detail-section'>
            <div className='section-title'>Bank Detail</div>
            <div className='section-body'>
              <div className='input'>
                <input
                  type='Number'
                  placeholder='Account Number*'
                  name='bankAcc'
                  value={this.state.bank.bankAcc}
                  onChange={this.handleChange}
                  autoComplete='off'
                />
              </div>
              <div className='action'>
                <div className='edit'>
                  <div className='icon'>
                    <EditIcon />
                  </div>
                </div>
                <div className='delete'>
                  <div className='icon'>
                    <DeleteIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className='add-new'>
              <div className='icon'>
                <AddIcon />
              </div>
              <div className='text'>Add New</div>
            </div>
          </div>
          <Divider />
          <div className='secret-address-section'>
            <div className='section-title'>Secret Address</div>
            <div className='section-body'>
              <div className='input'>
                <input
                  type='text'
                  placeholder='Secret Address*'
                  name='address'
                  value={this.state.address.address}
                  onChange={this.handleChange}
                  autoComplete='off'
                />
              </div>
              <div className='input'>
                <input
                  type='text'
                  placeholder='Address Type*'
                  name='addressType'
                  value={this.state.address.addressType}
                  onChange={this.handleChange}
                  autoComplete='off'
                />
              </div>
              <div className='action'>
                <div className='edit'>
                  <div className='icon'>
                    <EditIcon />
                  </div>
                </div>
                <div className='delete'>
                  <div className='icon'>
                    <DeleteIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className='add-new'>
              <div className='icon'>
                <AddIcon />
              </div>
              <div className='text'>Add New</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
