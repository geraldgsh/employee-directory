import {
  arrayBegin,
  arraySuccess,
  bossSuccess,
  arrayFailure,
} from '../../actions/index';

describe('change loading state', () => {
  it('should change loading state to reducer', () => {
    const expectedAction = {
      type: 'ARRAY_BEGIN',
    };
    expect(arrayBegin()).toEqual(expectedAction);
  });
});

describe('add array', () => {
  it('should add names to reducer', () => {
    const array = {
      arrays: ['Willy Nelson'],
    };
    const expectedAction = {
      array,
      type: 'ARRAY_SUCCESS',
    };
    expect(arraySuccess(array)).toEqual(expectedAction);
  });
});

describe('add array', () => {
  it('should add names to reducer', () => {
    const boss = {
      bosses: ['Willy Nelson'],
    };
    const expectedAction = {
      boss,
      type: 'BOSS_SUCCESS',
    };
    expect(bossSuccess(boss)).toEqual(expectedAction);
  });
});

describe('add error', () => {
  it('should add error to reducer', () => {
    const error = 'Unable to find endpoint';
    const expectedAction = {
      error,
      type: 'ARRAY_FAILURE',
    };
    expect(arrayFailure(error)).toEqual(expectedAction);
  });
});
