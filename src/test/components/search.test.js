import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import '@testing-library/jest-dom/extend-expect';
import Search from '../../components/search';

Enzyme.configure({ adapter: new Adapter() });

const initialState = '';
const mockStore = configureStore();
let store;

const setup = () => {
  store = mockStore(initialState);
  const component = mount(
    <Provider store={store}>
      <Search />
    </Provider>,
  );
  return component;
};

describe('Search component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render one form tag', () => {
    expect(component.find('form')).toHaveLength(1);
  });
  it('should render one Grid tag', () => {
    expect(component.find(Grid)).toHaveLength(1);
  });
  it('should render one TextField tag', () => {
    expect(component.find(TextField)).toHaveLength(1);
  });
  it('should render three Button tag', () => {
    expect(component.find(Button)).toHaveLength(1);
  });
});
