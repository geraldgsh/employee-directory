import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom/extend-expect';
import Grid from '@material-ui/core/Grid';
import Results from '../../containers/results';

Enzyme.configure({ adapter: new Adapter() });

const initialState = {
  loading: false,
  arrays: ['Tim Burton'],
  bosses: ['Tim Burton'],
  error: null,
};
const mockStore = configureStore([thunk]);
let store;

const setup = () => {
  store = mockStore(initialState);
  const component = mount(
    <Provider store={store}>
      <Results />
    </Provider>,
  );
  return component;
};

describe('Results container', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render four Grid', () => {
    expect(component.find(Grid)).toHaveLength(4);
  });
  it('should render one EmployeeOverview component', () => {
    expect(component.find('EmployeeOverview')).toHaveLength(1);
  });
  it('should render one GoBack component', () => {
    expect(component.find('GoBack')).toHaveLength(1);
  });
});
