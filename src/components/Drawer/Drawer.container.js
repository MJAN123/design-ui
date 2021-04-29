import Drawer from './Drawer';

import { connect } from 'react-redux';
import { setDrawerOpen } from '../../store/actions/application.actions';
import { getIsDrawer } from '../../store/selectors/application.selectors';

const mapStateToProps = (state) => {
  const isDrawer = getIsDrawer(state);

  return {
    isDrawer,
  };
};
const mapDispatchToProps = {
  setDrawerOpen,
};
export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
