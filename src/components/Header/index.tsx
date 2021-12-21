import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrapper, LogoContainer, Option, Options } from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <Link to="/">HOME</Link>
      </LogoContainer>
      <Options>
        <Option>
          <Link to="/hats">HATS</Link>
        </Option>
      </Options>
    </HeaderWrapper>
  );
};

export default Header;
