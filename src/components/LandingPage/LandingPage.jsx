import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '../Drawer';
import SettingModal from '../SettingModal';
import BookingsTable from '../BookingsTable';
export default class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      isDrwaer: false,
    };
  }

  render() {
    const { setDrawerOpen, isSettingOpen } = this.props;

    return (
      <div className='landing-page-container'>
        <div className='menu-btn'>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={() => {
              setDrawerOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className='landing-page-content'>
          <Drawer />
          {isSettingOpen === 'setting' && <SettingModal />}
          {isSettingOpen === 'Booking' && <BookingsTable />}
        </div>
      </div>
    );
  }
}
