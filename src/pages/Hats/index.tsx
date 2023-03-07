import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Wrapper } from './styles';

const Hats = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/hats');
  };

  return (
    <Wrapper onClick={handleClick}>
      <div>{'Hats page'}</div>
    </Wrapper>
  );
};

export default Hats;
