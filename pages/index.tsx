import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import cn from 'classnames';
import { Layout } from '@components/index';

const Index: NextPage & InferGetStaticPropsType<typeof getStaticProps> = () => {
	return (
		<Layout>
			<div
				className={cn(
					'text-accents-3 mx-auto my-10 w-screen flex flex-row text-4xl justify-center min-w-full bg-primary-1 '
				)}
			>
				It do work!
			</div>
		</Layout>
	);
};

const getStaticProps: GetStaticProps = async () => {
	await Layout.arguments;
	return {
		props: {
			param: Layout
		}
	};
};

export default Index;
