import { NextPage } from 'next';
import cn from 'classnames';
import { Layout } from '@components/index';
import Head from 'next/head';

const Index: NextPage = () => {
	return (
		<>
			<Head>
				<title> LANDING </title>
			</Head>
			<Layout>
				<div
					className={cn(
						'text-primary-1 mx-auto my-10 w-screen flex flex-row text-6xl justify-center min-w-full '
					)}
				>
					Limpio
				</div>
			</Layout>
		</>
	);
};

export default Index;
