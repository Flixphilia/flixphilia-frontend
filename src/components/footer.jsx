import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  height: 200px;
  position: sticky;
  bottom: 0;
`;

const Copyright = styled.span`
  color: white;
  font-size: 16px;
  width: 100%;
  text-align: center;
  margin-top: 180px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Copyright>© FlixPhilia | 2020</Copyright>
    </StyledFooter>
  );
};

export default Footer;
