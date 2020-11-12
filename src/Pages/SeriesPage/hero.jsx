import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  padding: 16px;
`;

const HeroImage = styled.img`
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 0 8px green;
`;

const Hero = ({ poster, alt }) => {
  return (
    <StyledHero>
      <HeroImage src={poster} alt={alt}></HeroImage>
    </StyledHero>
  );
};

export default Hero;
