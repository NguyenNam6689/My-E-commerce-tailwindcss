//* LIB
import React from 'react';

//* IMPORT
import { API_SVG } from '@/common/constants';
import { CustomSvgProps } from '@/interfaces/hook/UseSvgInterface';

const useSvg = ({ children, ...svgProps }: CustomSvgProps) => {
	return (
		<React.Fragment>
			<svg xmlns={API_SVG} {...svgProps}>
				{children}
			</svg>
		</React.Fragment>
	);
};

export default useSvg;
