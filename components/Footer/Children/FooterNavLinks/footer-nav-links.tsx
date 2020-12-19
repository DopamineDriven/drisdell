import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';
import css from './footer-nav-links.module.css';

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

const FooterNavLinks = () => {
	const { pathname } = useRouter();

	const footerNavList = footerLinks.map((link, index) => (
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
	));
	return <ul className={cn(css.footerLinksUl)}>{footerNavList}</ul>;
};

export default FooterNavLinks;
