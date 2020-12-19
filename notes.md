```tsx
import Link from 'next/link';
import cn from 'classnames';
import {
	AnchorHTMLAttributes,
	forwardRef,
	JSXElementConstructor,
	useRef
} from 'react';
import { useRouter } from 'next/router';
import css from './footer-nav-links.module.css';
import React from 'react';
import { useLink } from 'react-aria/dist/types';

interface FooterNavRef {
	href: string;
	label: string;
	className: string;
}

const footerLinks: FooterNavRef[] = [
	{
		href: '/',
		label: 'Home',
		className: ``
	},
	{
		href: '/about-us',
		label: 'About Us',
		className: ``
	},
	{
		href: '/consultants',
		label: 'Consultants',
		className: ``
	},
	{
		href: '/contact',
		label: 'Contact',
		className: ``
	}
];

export interface UlProp extends AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string;
	Component?: string | JSXElementConstructor<any>;
	loading?: boolean;
	disabled?: boolean;
	active?: boolean;
}

const FooterNavLinks: React.FC<UlProp> = forwardRef((props, anchorRef) => {
	const { pathname } = useRouter();
	const {
		Component = 'a',
		active,
		children,
		onClick,
		loading = false,
		disabled = false,
		className,
		...rest
	} = props;
	const ref = useRef<typeof Component>(null);
	const { linkProps } = useLink(
		{
			...rest,
			onPress: onClick,
			isDisabled: disabled,
			elementType: Component
		},
		ref
	);
	const footerNavList = footerLinks.map((link, index) => (
		<Component aria-pressed={active} data-variant={varian}>
			<li key={index++} className={css.footerLinksLi}>
				<Link href={link.href} as={`${link.href}`} passHref>
					<a
						className={
							pathname === link.href
								? cn(css.linkActive, link.className)
								: cn(css.links, link.className)
						}
						key={`/${link.href}`}
						aria-label={`link to ${link.label}`}
					>
						{link.label}
					</a>
				</Link>
			</li>
		</Component>
	));
	return <ul className={cn(css.footerLinksUl)}>{footerNavList}</ul>;
});

export default FooterNavLinks;
```
