import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import '@testing-library/jest-dom/extend-expect';
import GoBack from '../../elements/buttons';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const component = shallow(
    <GoBack />,
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
  it('should render one Button component', () => {
    expect(component.find(Button)).toHaveLength(1);
  });
});
