import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../Common/Button';
import { render } from '@testing-library/react';

class PopupModal extends Component {
  render() {
    return (
      <div>
        {' '}
        <Dialog open={open}>
          <DialogTitle>
            <div className='disable-modal-title'>Disable Data Signals?</div>
          </DialogTitle>

          <div className='disable-modal-discription'>
            Disabling data signals will remove grouping / data signal
            assignments from all audio files in the ad. This operation can not
            be reversed.
          </div>

          <div className='disable-modal-action-btn' style={{ display: 'flex' }}>
            <div className='btn-cancel'>
              <Button
                btnText='Cancel'
                className='btn btn-cancel-transparent'
                onClick={handleClose}
              />
            </div>
            <div className='btn-cancel'>
              <Button
                btnText='Disable'
                className='btn btn-signal-disable'
                onClick={handleDisable}
              />
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default PopupModal;
