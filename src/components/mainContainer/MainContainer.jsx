import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
    position: absolute;
    z-index: 5;
    left: 20vw;
    width: 80vw;
    margin: 0;
    height: 100vh;
`

export default function MainContainer() {
  return <Main />
}
