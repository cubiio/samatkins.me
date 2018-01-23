import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import SMIcons from '../components/SMIcons';
import Footer from '../components/Footer';

export default () => (
  <div>
    <Nav />
    <Wrapper>
      <Container>
        <h1>Page not found</h1>
        <p>You just hit a route that doesn't exist... the sadness.</p>
      </Container>
    </Wrapper>
    <SMIcons />
    <Footer />
  </div>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 45%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 700px) {
    width: 95%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
