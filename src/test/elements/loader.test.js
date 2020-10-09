import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Grid from '@material-ui/core/Grid';
import '@testing-library/jest-dom/extend-expect';
import Loader from '../../elements/loader';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const component = shallow(
    <Loader />,
  );
  return component;
};

describe('GoBack container', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render one Grid', () => {
    expect(component.find(Grid)).toHaveLength(1);
  });
  it('should render one div tag', () => {
    expect(component.find('div')).toHaveLength(1);
  });
});
