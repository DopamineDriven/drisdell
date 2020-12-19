import { NextPage } from 'next';
import cn from 'classnames';
import { Layout } from '@components/index';

const Index: NextPage = () => {
	return (
		<>
			<Layout title='Drisdell Consulting Services'>
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
