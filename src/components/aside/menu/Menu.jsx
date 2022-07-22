import React from 'react';
import styled from 'styled-components';
import MenuItem from './menuItem/MenuItem';

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    padding: 0;
    margin: 40px 0;
`

const MenuOptions = [
    {name: "Dashboard", icon: "./dashboard-icon.svg"},
    {name: "Tasks", icon: "./tasks-icon.svg"},
    {name: "Notes", icon: "./notes-icon.svg"}
];

export default function Menu() {
  return (
    <MenuList>
        {MenuOptions.map(option => <MenuItem name={option.name} icon={option.icon}/>)}
    </MenuList>
  )
}