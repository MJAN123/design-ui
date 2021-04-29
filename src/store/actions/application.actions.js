import ACTIONS from '../../utils/design.constant';

export const setDrawerOpen = (state) => {
  return {
    type: ACTIONS.SET_OPEN_DRAWER,
    state,
  };
};

export const setSettingOpen = (state) => {
  return {
    type: ACTIONS.SET_OPEN_SETTING,
    state,
  };
};
