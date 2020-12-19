import { CSSProperties } from 'react';

export default interface SvgGlobal {
	width?: string;
	height?: string;
	root?: string;
	classNameSVG?: string;
	classNameGtag?: string;
	classNameStroke?: string;
	classNamePath?: [string];
	classNameParent?: string;
	styleSVG?: CSSProperties;
	styleGtag?: CSSProperties;
	fillColor0?: string;
	fillColor1?: string;
	fillColor2?: string;
	fillColor3?: string;
	strokeColor?: string;
	rotateCenter?: number;
}
