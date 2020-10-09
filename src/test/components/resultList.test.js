import React from 'react';
import Enzyme, { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { List } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import '@testing-library/jest-dom/extend-expect';
import ResultList from '../../components/resultList';

Enzyme.configure({ adapter: new Adapter() });

const initialState = {
  loading: false,
  arrays: ['Tim Burton'],
  error: null,
};
const mockStore = configureStore([thunk]);
let store;

const setup = () => {
  store = mockStore(initialState);
  const component = mount(
    <Provider store={store}>
      <ResultList />
    </Provider>,
  );
  return component;
};

describe('ResultList component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render two Grid tag', () => {
    expect(component.find(Grid)).toHaveLength(2);
  });
  it('should render one List tag', () => {
    expect(component.find(List)).toHaveLength(1);
  });
});
