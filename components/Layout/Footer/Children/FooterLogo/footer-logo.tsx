import DrisdellIcon from '@components/Layout/Logo';
import Link from 'next/link';
import { FC } from 'react';
import cn from 'classnames';
import css from './footer-logo.module.css';

interface FooterLogoProps {
	classNameRoot?: string;
}

const FooterLogo: FC<FooterLogoProps> = props => {
	const { classNameRoot = '' } = props;

	return (
		<Link href='/'>
			<a className={cn(classNameRoot, css.footerLogoA)}>
				<span className={css.footerLogoSpan}>
					<DrisdellIcon
						width='10rem'
						height='10rem'
						classNameSVG='bg-primary-9 rounded-full'
					/>
				</span>
			</a>
		</Link>
	);
};

export default FooterLogo;
