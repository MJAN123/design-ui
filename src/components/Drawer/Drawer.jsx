import React, { Component } from 'react';
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  ChevronLeft,
  NoteAdd,
  Person,
  PersonAdd,
  AttachMoney,
  Build,
  Settings,
} from '@material-ui/icons';

export class DrawerMenu extends Component {
  handleDrawerClose = () => {};
  render() {
    return (
      <div className='drawer-container'>
        <Drawer variant='persistent' anchor='left' open={true}>
          <div className='logo-icon'>
            <div className='logo'>Logo</div>
            <div className='collapse-icon'>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeft />
              </IconButton>
            </div>
          </div>
          <Divider />
          <div className='drawer-menu-container'>
            <div className='drawer-menu'>
              <List>
                {[
                  'Booking',
                  'Positions',
                  'User Management',
                  'Trading',
                  'Instruments',
                ].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index === 0 && <NoteAdd />}
                      {index === 1 && <Person />}
                      {index === 2 && <PersonAdd />}
                      {index === 3 && <AttachMoney />}
                      {index === 4 && <Build />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <Divider />
            </div>
            <div className='drawer-action-button'>
              <div className='setting-logout'>
                <div className='setting'>
                  <Settings />
                </div>
                <div className='logout'>
                  <button>Logout</button>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default DrawerMenu;
