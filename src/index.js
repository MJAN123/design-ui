import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/scss/style.scss';
import store from './store';
import App from './components/App';
import { ThemeProvider } from '@material-ui/core/styles';
//Theme
// import theme from './assets/theme';

ReactDOM.render(
  <Provider store={store}>
    {/* <ThemeProvider theme={theme}> */}
    <App />
    {/* </ThemeProvider> */}
  </Provider>,
  document.getElementById('root')
);
