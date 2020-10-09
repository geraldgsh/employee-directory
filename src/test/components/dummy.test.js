import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '@testing-library/jest-dom/extend-expect';
import Dummy from '../../components/dummy';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const component = shallow(
    <Dummy />,
  );
  return component;
};

describe('Dummy component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render two Grid tag', () => {
    expect(component.find(Grid)).toHaveLength(2);
  });
  it('should render one Typography tag', () => {
    expect(component.find(Typography)).toHaveLength(1);
  });
  it('should render one EmployeeOverview component', () => {
    expect(component.find('EmployeeOverview')).toHaveLength(1);
  });
  it('should render one GoBack component', () => {
    expect(component.find('GoBack')).toHaveLength(1);
  });
});
