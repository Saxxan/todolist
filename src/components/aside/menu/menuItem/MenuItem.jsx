import React, { useState } from 'react';
import styled from 'styled-components';
import "./menuItems.scss";
import { TitleSmall } from '../../../../utils/typography/Typography';

const MenuListItem = styled.li`
	width: 100%;
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	gap: 20px;
	border-radius: 10px;
	cursor: pointer;
`

const Index = styled.div`
	width: 12px;
	height: 38px;
	border-radius: 5px;
`

const MenuListItemContent = styled.section`
	display: flex;
	gap: 15px;
`

export default function MenuItem(props) {
	const [isActive, setIsActive] = useState(false);

	function handleOnClick() {
		setIsActive(!isActive);
	}

	return (
		<MenuListItem className={isActive ? "active" : ""} onClick={handleOnClick}>
			<Index/>
			<MenuListItemContent>
				<img src={props.icon}/>
				<TitleSmall>{props.name}</TitleSmall>
			</MenuListItemContent>
		</MenuListItem>
	)
}
