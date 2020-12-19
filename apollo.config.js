module.exports = {
	client: {
		service: {
			name: 'drisdell',
			key: process.env.APOLLO_KEY,
			url: process.env.WORDPRESS_API_URL,
			skipSSLValidation: true,
			includes: [
				'./**/*.ts',
				'./**/*.tsx',
				'./**/*.js',
				'./lib/**/*.ts',
				'./lib/apollo.ts',
				'./pages/**/*.tsx'
			]
		}
	}
};
