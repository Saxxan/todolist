import React from 'react';
import styled from 'styled-components';

const AsideMenu = styled.aside`
    width: 20vw;
    height: 100vh;
    background-color: var(--black-bg);
    border-radius: 0 20px 20px 0;
    z-index: 3;
`

export default function Menu() {
  return <AsideMenu/>
}
