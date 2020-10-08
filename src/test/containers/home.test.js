import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Grid from '@material-ui/core/Grid';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../containers/home';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const component = shallow(
    <Home />,
  );
  return component;
};

describe('Home container', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render three Grid', () => {
    expect(component.find(Grid)).toHaveLength(1);
  });
  it('should render one HomeHeader component', () => {
    expect(component.find('HomeHeader')).toHaveLength(1);
  });
  it('should render one Search component', () => {
    expect(component.find('Search')).toHaveLength(1);
  });
});
