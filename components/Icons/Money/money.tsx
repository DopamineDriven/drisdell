import { FC } from 'react';
import SvgAbstracted from '@_types/Svg';

const MoneyIcon: FC<SvgAbstracted> = props => {
	const { width = '35.42', height = '62.629', classNameSVG } = props;

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 35.42 62.629'
			className={classNameSVG}
		>
			<path
				id='Icon_material-attach-money'
				data-name='Icon material-attach-money'
				d='M28.547,31.987c-7.9-2.053-10.438-4.175-10.438-7.481,0-3.793,3.514-6.437,9.394-6.437,6.193,0,8.49,2.957,8.7,7.307h7.689c-.244-5.985-3.9-11.482-11.169-13.256V4.5H22.284v7.515c-6.75,1.461-12.178,5.845-12.178,12.561,0,8.037,6.646,12.039,16.353,14.37C35.158,41.034,36.9,44.1,36.9,47.331c0,2.4-1.7,6.228-9.394,6.228-7.168,0-9.986-3.2-10.369-7.307H9.48c.418,7.62,6.124,11.9,12.8,13.326v7.55H32.722V59.648C39.507,58.361,44.9,54.429,44.9,47.3,44.9,37.415,36.445,34.04,28.547,31.987Z'
				transform='translate(-9.48 -4.5)'
				fill='#1a1d1e'
			/>
		</svg>
	);
};

export default MoneyIcon;
