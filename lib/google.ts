import ReactGA, { EventArgs } from 'react-ga';
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID ?? '';

export const gaInit = () => {
	ReactGA.initialize(`${process.env.GA_TRACKING_ID}`);
};

export const pageview = (url: string) => {
	ReactGA.ga('config', `${process.env.GA_TRACKING_ID}`, {
		page_path: url
	});
};

export const logPageView = () => {
	ReactGA.set({ page: window.location.pathname });
	ReactGA.pageview(window.location.pathname + window.location.search);
};

export const event = ({ action, category, label, value }: EventArgs) => {
	ReactGA.event({
		action,
		category,
		label,
		value
	});
};
