import styled from '@emotion/styled'
import React from 'react';

export default function Home() {
  return (
    <HomeContainer>
      <h1>👋 Chanho`s Boilerplate</h1>
      <Chanho src="/images/chanho.jpeg" alt="chanho image" />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  margin-top: 15px;
  text-align: center;

  h1 {
    color: #f1c40f;
    font-size: 25px;
  }
`;

const Chanho = styled.img`
  display: inline-block;
  margin-top: 10px;
  width: 100px;
  border-radius: 5px;
`;
