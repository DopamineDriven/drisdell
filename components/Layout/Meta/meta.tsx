import Head from 'next/head';

export enum Constants {
	CMS_NAME = 'Headless WordPress via Amazon LightSail',
	CMS_URL = 'https://drisdell-headless.com/',
	EXAMPLE_PATH = 'drisdell',
	HOME_OG_IMAGE_URL = 'https://og-image.now.sh/**Drisdell%20Consulting%20Services**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fss8q9p3mq3mu4d3kvjpw.png&widths=350&widths=350&heights=350&heights=350',
	CLIENT_NAME = 'Drisdell Consulting Services',
	CANONICAL_URL = 'https://drisdell.vercel.app'
}

const Meta = () => {
	const { CANONICAL_URL, CMS_NAME, HOME_OG_IMAGE_URL } = Constants;
	return (
		<Head>
			<link
				rel='apple-touch-icon'
				type='img/png'
				sizes='180x180'
				href='/meta/apple-touch-icon.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/meta/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/meta/favicon-16x16.png'
			/>
			<link rel='manifest' href='/meta/webmanifest.json' />
			<link rel='mask-icon' href='/meta/safari-pinned-tab.svg' color='#000000' />
			<link rel='shortcut icon' href='/meta/favicon.ico' />
			<link rel='canonical' href={CANONICAL_URL} />
			<meta name='robots' content='all' />
			<meta
				name='viewport'
				content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5'
			/>
			<meta name='format-detection' content='telephone=no' />
			<title>{'Drisdell Consulting Services'}</title>
			<meta name='msapplication-TileColor' content='#000000' />
			<meta name='msapplication-config' content='/meta/browserconfig.xml' />
			<meta name='theme-color' content='#000000' />
			<link rel='alternate' type='application/rss+xml' href='/feed.xml' />
			<meta name='description' content={`${CMS_NAME}`} />
			<meta charSet='utf-8' />
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta
				name='keywords'
				content='nextjs, typescript, react, incremental static site regeneration, WPGraphQL, Apollo, GraphQL, headless wordpress, tailwindcss, vercel, figma'
			/>
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:site' content='@Dopamine_Driven' />
			<meta name='twitter:title' content='Andrew Ross — Full-Stack Engineer' />
			<meta name='twitter:description' content={`${CMS_NAME}`} />
			<meta name='twitter:image' content={HOME_OG_IMAGE_URL} />
			<meta name='twitter:creator' content='@Dopamine_Driven' />
			<meta property='og:type' content='website' />
			<meta property='og:url' content='https://drisdell-consulting.vercel.app' />
			<meta property='og:title' content='Drisdell Consulting Services' />
			<meta property='og:description' content={`${CMS_NAME}`} />
			<meta property='og:image' content={HOME_OG_IMAGE_URL} />
			<meta property='og:image:width' content='2048' />
			<meta property='og:image:height' content='1170' />
		</Head>
	);
};

export default Meta;
