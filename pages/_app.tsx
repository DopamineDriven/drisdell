import { AppProps, NextWebVitalsMetric } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { gaInit, logPageView } from '@lib/google';
import { config } from '@fortawesome/fontawesome-svg-core';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '@styles/index.css';

config.autoAddCss = false;

function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(() => {
		gaInit();
		const handleRouteChange = () => {
			logPageView();
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);
	return <Component {...pageProps} />;
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
	console.debug(metric);
}

export default App;
