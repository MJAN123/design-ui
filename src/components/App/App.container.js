import { connect } from 'react-redux';
import App from './App';
import { getUserName } from '../../store/selectors/user.selectors';

const mapStateToProps = (state) => {
  const userName = getUserName(state);
  return {
    userName,
  };
};
export default connect(mapStateToProps, null)(App);
