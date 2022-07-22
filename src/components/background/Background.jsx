import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
	position: absolute;
	z-index: 1;
	filter: blur(70px);
`

const SVGPurple = styled(SVG)`
	top: 20px;
	left: 20px;
`

const SVGGreen = styled(SVG)`
	top: 20px;
	right: 20px;
`

export default function Background() {
	return (
		<>
			<SVGPurple width="1100" height="700" viewBox="0 0 1008 857" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_f_30_420)">
					<path d="M965.118 125.731C817.815 -58.8095 204.151 -22.3318 63.9289 167.646C-52.103 324.849 14.2269 695.726 156.169 829.998C282.727 949.717 473.753 557.89 626.432 473.993C826.59 364.007 1107.6 304.225 965.118 125.731Z" fill="#9D8DF1" />
				</g>
				<defs>
					<filter id="filter0_f_30_420" x="0.525391" y="0.715332" width="1007.4" height="855.838" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_30_420" />
					</filter>
				</defs>
			</SVGPurple>
			<SVGGreen width="1100" height="700" viewBox="0 0 946 851" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_f_30_419)">
					<path d="M41.9199 721.77C178.344 914.492 745.495 868.574 896.432 686.993C1021.33 536.737 858.729 168.844 724.761 26.6159C605.312 -100.198 513.193 345.034 355.932 419.993C149.77 518.261 -90.0341 535.362 41.9199 721.77Z" fill="#1CFEBA" />
				</g>
				<defs>
					<filter id="filter0_f_30_419" x="0.114502" y="0.0314331" width="945.028" height="850.329" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_30_419" />
					</filter>
				</defs>
			</SVGGreen>
		</>
	)
}
