import React, { PureComponent } from 'react';
import CrossIcon from '../Common/Icons/CrossIcon';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import PopEntries from './PopEntries';
import CustomButton from '../Common/CustomButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export class BookingPopup extends PureComponent {
  constructor() {
    super();
    this.state = {
      entries: [
        [
          {
            name: 'entity A',
            books: [1, 2, 3],
            instruments: [1, 2, 3],
          },
          {
            name: 'entity A',
            books: [1, 2, 3],
            instruments: [1, 2, 3],
          },
          {
            name: 'entity A',
            books: [1, 2, 3],
            instruments: [1, 2, 3],
          },
          {
            name: 'entity A',
            books: [1, 2, 3],
            instruments: [1, 2, 3],
          },
        ],
      ],
      select: [],
    };
  }
  handleAddNew = () => {
    this.setState({
      entries: [
        ...this.state.entries,
        [
          ...[
            {
              name: 'entity A',
              books: [1, 2, 3],
              instruments: [1, 2, 3],
            },
            {
              name: 'entity A',
              books: [1, 2, 3],
              instruments: [1, 2, 3],
            },
            {
              name: 'entity A',
              books: [1, 2, 3],
              instruments: [1, 2, 3],
            },
            {
              name: 'entity A',
              books: [1, 2, 3],
              instruments: [1, 2, 3],
            },
          ],
        ],
      ],
    });
  };
  render() {
    const { isOpen, handleModalClose } = this.props;

    return (
      <Dialog open={isOpen} fullWidth>
        <div className='pop-up-container'>
          <div className='modal-header'>
            <div className='title'>Create Or Edit Modal</div>
          </div>
          <div className='model-content'>
            {this.state.entries.map((item) => {
              return <PopEntries />;
            })}
          </div>
          <div className='model-actions'>
            <div className='create-new' onClick={() => this.handleAddNew()}>
              <div className='icon'>
                <FontAwesomeIcon icon={faPlusCircle} />
              </div>
              <div className='text'>Add New Entry</div>
            </div>
            <div className='button'>
              <div className='close-button'>
                <CustomButton
                  btnText='Close'
                  className='btn-lg'
                  handleClick={() => {
                    handleModalClose(false);
                  }}
                />
              </div>
              <div className='save-button'>
                <CustomButton
                  btnText='Save'
                  className='btn-lg'
                  handleClick={() => {
                    handleModalClose(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    );
  }
}

export default BookingPopup;
