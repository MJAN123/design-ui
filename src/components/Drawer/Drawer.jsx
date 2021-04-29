import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Button,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  ChevronLeft,
  NoteAdd,
  Person,
  PersonAdd,
  AttachMoney,
  Build,
  Settings,
} from '@material-ui/icons';

// const styles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },

//   drawerPaper: {
//     backgroundColor: theme.primary,
//   },
// }));
export class DrawerMenu extends Component {
  handleRoute = () => {
    this.props.history.push('/');
  };
  render() {
    const { isDrawer, setDrawerOpen, setSettingOpen } = this.props;
    return (
      <div className='drawer-container'>
        <React.Fragment>
          <Drawer
            variant='persistent'
            anchor='left'
            open={isDrawer}
            // classes={{
            //   paper: classes.drawerPaper,
            // }}
            backgroundColor='primary'
          >
            <div className='logo-icon'>
              <div className='logo'>
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
              <div className='collapse-icon'>
                <IconButton onClick={() => setDrawerOpen(false)}>
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
                    <Settings onClick={() => setSettingOpen(true)} />
                  </div>
                  <div className='logout'>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={() => this.handleRoute()}
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      </div>
    );
  }
}

export default withRouter(DrawerMenu);
