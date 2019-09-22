import React from 'react';
import { Container } from './Container';
import { AnimationWrapper as Wrapper } from './AnimationWrapper';
import { AnimationPlaceholder } from './AnimationPlaceholder';
import Loading1 from '../animation/loading1';
import Loading2 from '../animation/loading2';

import './app.scss';

export default function MainContainer() {
  return (
    <>
      <Container>
        <Wrapper><Loading1 /></Wrapper>
        <Wrapper><Loading2 /></Wrapper>
        <Wrapper><Loading2 /></Wrapper>
      </Container>
      <Container>
        <Wrapper><Loading2 /></Wrapper>
        <Wrapper><Loading2 /></Wrapper>
        <Wrapper><Loading2 /></Wrapper>
      </Container>
      <Container>
        <Wrapper><Loading2 /></Wrapper>
        <Wrapper><Loading2 /></Wrapper>
        <Wrapper><AnimationPlaceholder /></Wrapper>
      </Container>
    </>
  );
}