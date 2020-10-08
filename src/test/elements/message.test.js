import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '@testing-library/jest-dom/extend-expect';
import GoBack from '../../elements/buttons';
import { NoResult, ErrorMsg } from '../../elements/message';

Enzyme.configure({ adapter: new Adapter() });

const NoResultSetup = () => {
  const NoResultComponent = shallow(
    <NoResult />,
  );
  return NoResultComponent;
};

describe('NoResult component', () => {
  let NoResultComponent;
  beforeEach(() => {
    NoResultComponent = NoResultSetup();
  });

  it('should render two Grid', () => {
    expect(NoResultComponent.find(Grid)).toHaveLength(2);
  });
  it('should render one Typography component', () => {
    expect(NoResultComponent.find(Typography)).toHaveLength(1);
  });
  it('should render one GoBack component', () => {
    expect(NoResultComponent.find(GoBack)).toHaveLength(1);
  });
});

const ErrorMsgSetup = () => {
  const error = 'Error 404';
  const ErrorMsgComponent = shallow(
    <ErrorMsg error={error} />,
  );
  return ErrorMsgComponent;
};

describe('ErrorMsg component', () => {
  let ErrorMsgComponent;
  beforeEach(() => {
    ErrorMsgComponent = ErrorMsgSetup();
  });

  it('should render two Grid', () => {
    expect(ErrorMsgComponent.find(Grid)).toHaveLength(2);
  });
  it('should render one Typography component', () => {
    expect(ErrorMsgComponent.find(Typography)).toHaveLength(1);
  });
  it('should render one GoBack component', () => {
    expect(ErrorMsgComponent.find(GoBack)).toHaveLength(1);
  });
});
