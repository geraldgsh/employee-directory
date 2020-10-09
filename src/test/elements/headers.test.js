import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '@testing-library/jest-dom/extend-expect';
import { HomeHeader, EmployeeOverview, Subordinate } from '../../elements/headers';

Enzyme.configure({ adapter: new Adapter() });

const HomeHeaderSetup = () => {
  const HomeHeaderComponent = shallow(
    <HomeHeader />,
  );
  return HomeHeaderComponent;
};

describe('HomeHeader component', () => {
  let HomeHeaderComponent;
  beforeEach(() => {
    HomeHeaderComponent = HomeHeaderSetup();
  });

  it('should render one Grid', () => {
    expect(HomeHeaderComponent.find(Grid)).toHaveLength(1);
  });
  it('should render one Typography component', () => {
    expect(HomeHeaderComponent.find(Typography)).toHaveLength(1);
  });
});

const EmployeeOverviewSetup = () => {
  const EmployeeOverviewComponent = shallow(
    <EmployeeOverview />,
  );
  return EmployeeOverviewComponent;
};

describe('EmployeeOverview component', () => {
  let EmployeeOverviewComponent;
  beforeEach(() => {
    EmployeeOverviewComponent = EmployeeOverviewSetup();
  });

  it('should render one Grid', () => {
    expect(EmployeeOverviewComponent.find(Grid)).toHaveLength(1);
  });
  it('should render one Typography component', () => {
    expect(EmployeeOverviewComponent.find(Typography)).toHaveLength(1);
  });
});

const SubordinateSetup = () => {
  const bosses = ['Tim Burton'];
  const SubordinateComponent = shallow(
    <Subordinate bosses={bosses} />,
  );
  return SubordinateComponent;
};

describe('Subordinate component', () => {
  let SubordinateComponent;
  beforeEach(() => {
    SubordinateComponent = SubordinateSetup();
  });
  it('should render one Grid', () => {
    expect(SubordinateComponent.find(Grid)).toHaveLength(1);
  });
  it('should render one Grid', () => {
    expect(SubordinateComponent.props().children.props.children[2][0]).toBe('Tim Burton');
  });
});
