import React from 'react';
import Link from 'next/link';
import Asteroid from '../../components/Asteroid';
import StyledWrapper from './StyledWrapper';

const AsteroidPage = () => {
  return (
    <StyledWrapper>
      <div className="navbar">
        <div className="container flex items-center">
          <h2 className="text-lg">Nasa Near Earth Objects</h2>
          <div className="links">
            <Link href="/">Home</Link>
          </div>
        </div>
      </div>
      <Asteroid/>
    </StyledWrapper>
  )
}

export default AsteroidPage;