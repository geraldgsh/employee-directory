import {
  BOSS_SUCCESS,
} from '../actions/index';

const bossReducer = (
  state = [],
  action,
) => {
  switch (action.type) {
    case BOSS_SUCCESS:
      return { bosses: action.boss };
    default:
      return state;
  }
};

export default bossReducer;
