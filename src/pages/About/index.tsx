import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Wrapper } from './styles';

const Hats = ({ history }: RouteComponentProps) => {
  return (
    <Wrapper onClick={() => history.push('/about')}>
      <div>{'About page'}</div>
    </Wrapper>
  );
};

export default withRouter(Hats);
