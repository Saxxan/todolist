import React from 'react';
import styled from 'styled-components';
import { TitleMedium } from '../../utils/typography/Typography';
import Menu from './menu/Menu';

const AsideMenu = styled.aside`
  width: 20vw;
  height: 100vh;
  background-color: var(--black-bg);
  border-radius: 0 20px 20px 0;
  position: absolute;
  z-index: 5;
  margin: 0;
  padding: 30px;
`
const Divider = styled.hr`
  width: 100%;
  border: 0.25px solid;
`

export default function Aside() {
  return (
    <AsideMenu>
      <TitleMedium>MakeItEasy</TitleMedium>
      <Divider/>
      <Menu/>
    </AsideMenu>
  )
}
