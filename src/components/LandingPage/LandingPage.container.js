import { connect } from 'react-redux';
import { setDrawerOpen } from '../../store/actions/application.actions';
import { getIsDrawer } from '../../store/selectors/application.selectors';
import LandingPage from './LandingPage';

const mapStateToProps = (state) => {
  const isDrawer = getIsDrawer(state);

  return {
    isDrawer,
  };
};
const mapDispatchToProps = {
  setDrawerOpen,
};
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
