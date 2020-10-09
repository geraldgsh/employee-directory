/* eslint-disable import/extensions */
import arrayReducer from '../../reducers/arrays';

const newBegin = [{
  loading: true,
  error: null,
}];
const newArrays = [{
  arrays: ['Tim Burton'],
  loading: false,
}];
const newError = [{
  arrays: [],
  error: 'Unable to find endpoint',
  loading: false,
}];
const beginAction = { type: 'ARRAY_BEGIN' };
const arraysAction = { type: 'ARRAY_SUCCESS' };
const errorAction = { type: 'ARRAY_FAILURE' };

describe('Change loading state', () => {
  it('should change loading state', () => {
    expect(arrayReducer(newBegin, beginAction.type)).toEqual(newBegin, beginAction.type);
  });
});

describe('Add arrays', () => {
  it('should add arrays', () => {
    expect(arrayReducer(newArrays, arraysAction.type)).toEqual(newArrays, arraysAction.type);
  });
});

describe('Add error', () => {
  it('should add error', () => {
    expect(arrayReducer(newError, errorAction.type)).toEqual(newError, errorAction.type);
  });
});
