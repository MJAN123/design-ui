import Drawer from './Drawer';

import { connect } from 'react-redux';
import {
  setDrawerOpen,
  setSettingOpen,
} from '../../store/actions/application.actions';
import { getIsDrawer } from '../../store/selectors/application.selectors';

const mapStateToProps = (state) => {
  const isDrawer = getIsDrawer(state);

  return {
    isDrawer,
  };
};
const mapDispatchToProps = {
  setDrawerOpen,
  setSettingOpen,
};
export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
