const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	important: true,
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	},
	purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
	theme: {
		rotate: {
			0: '0deg',
			45: '45deg',
			90: '90deg',
			125: '125deg',
			180: '180deg',
			360: '360deg',
			855: '845deg'
		},
		extend: {
            maxWidth: {
				'9xl': '2220px'
			},
			screens: {
				xs: '375px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1440px',
				'3xl': '1920px'
			},
			screens: {
				xs: '375px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1440px',
				'3xl': '1920px'
			},
			transitionDuration: {
				0: '0ms',
				300: '300ms',
				500: '500ms',
				700: '700ms',
				1000: '1000ms',
				2000: '2000ms'
			},
			fontFamily: {
				header: ['goudy-bookletter-1911', 'serif'],
				poppins: ['poppins', 'sans-serif'],
				somaRoman: ['neue-haas-grotesk-text', 'sans-serif'],
				somaDisplay: ['neue-haas-grotesk-display', 'sans-serif'],
				sans: ['Inter var', ...defaultTheme.fontFamily.sans]
			},
			backgroundColor: {
				primary: 'var(--color-bg-primary)',
				auxiliary: 'var(--color-bg-auxiliary)',
				tertiary: 'var(--color-bg-tertiary)',
				quaternary: 'var(--color-bg-quaternary)',
				quinary: 'var(--color-bg-quinary)',
				senary: 'var(--color-bg-senary)'
			},
			textColor: {
				accent: 'var(--color-text-accent)',
				primary: 'var(--color-text-primary)',
				auxiliary: 'var(--color-text-auxiliary)',
				tertiary: 'var(--color-text-tertiary)',
				quaternary: 'var(--color-text-quaternary)',
				quinary: 'var(--color-text-quinary)'
			},
			borderColor: {
				primary: 'var(--color-border-primary)',
				auxiliary: 'var(--color-border-auxiliary)'
			},
			fill: {
				primary: 'var(--color-fill-primary)',
				auxiliary: 'var(--color-fill-auxiliary)',
				tertiary: 'var(--color-fill-tertiary)',
				quaternary: 'var(--color-fill-quaternary)',
				quinary: 'var(--color-fill-quinary)',
				senary: 'var(--color-fill-senary)'
			},
			strokeColor: {
				primary: 'var(--stroke-primary)',
				auxiliary: 'var(--stroke-auxiliary)',
				tertiary: 'var(--stroke-tertiary)',
				quaternary: 'var(--stroke-quaternary)',
				quinary: 'var(--stroke-quinary)',
				senary: 'var(--stroke-senary)'
			},
			colors: {
				'primary-0': 'var(--primary-0)',
				'primary-1': 'var(--primary-1)',
				'primary-2': 'var(--primary-2)',
				'primary-3': 'var(--primary-3)',
				'primary-4': 'var(--primary-4)',
				'primary-5': 'var(--primary-5)',
				'primary-6': 'var(--primary-6)',
				'primary-7': 'var(--primary-7)',
				'primary-8': 'var(--primary-8)',
				'primary-9': 'var(--primary-9)',
				'secondary-0': 'var(--secondary-0)',
				'secondary-1': 'var(--secondary-1)',
				'secondary-2': 'var(--secondary-2)',
				'hover-0': 'var(--hover-0)',
				'hover-1': 'var(--hover-1)',
				'hover-2': 'var(--hover-2)',
				'focus-0': 'var(--focus-0)',
				'focus-1': 'var(--focus-1)',
				'focus-2': 'var(--focus-2)',
				'accents-0': 'var(--accents-0)',
				'accents-1': 'var(--accents-1)',
				'accents-2': 'var(--accents-2)',
				'accents-3': 'var(--accents-3)',
				'accents-4': 'var(--accents-4)',
				'accents-5': 'var(--accents-5)',
				'accents-6': 'var(--accents-6)',
				'accents-7': 'var(--accents-7)',
				'accents-8': 'var(--accents-8)',
				'accents-9': 'var(--accents-9)',
				lightBlue: {
					0: '#E3F8FF',
					100: '#B3ECFF',
					200: '#81DEFD',
					300: '#5ED0FA',
					400: '#40C3F7',
					500: '#2BB0ED',
					600: '#1992D4',
					700: '#127FBF',
					800: '#0B69A3',
					900: '#035388'
				},
				Cyan: {
					0: '#E0FCFF',
					100: '#BEF8FD',
					200: '#87EAF2',
					300: '#54D1DB',
					400: '#38BEC9',
					500: '#2CB1BC',
					600: '#14919B',
					700: '#0E7C86',
					800: '#0A6C74',
					900: '#044E54'
				},
				oneFiveBlack: '#151515',
				eaWhite: '#EAEAEA',
				afWhite: '#AFAFAF',
				fiveOBlack: '#505050',
				offWhite: '#F0F1F2'
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				hero: {
					transform: 'translate3d(0px, 0px, 0px)'
				}
			},
			animation: {
				wiggle: 'wiggle 10s ease-in-out infinite',
				hero: 'hero 1s ease-in-out infinite',
				slowPing: 'pulse 10s cubic-bezier(0, 0, 0.2, 1) infinite'
			},

			boxShadow: {
				'outline-2': '0 0 0 2px var(--accents-0)',
				magical:
					'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px'
			}
		},
		variants: {
			extend: {
				ringWidth: [
					'responsive',
					'hover',
					'active',
					'first',
					'last',
					'focus',
					'even',
					'odd',
					'group-hover'
				],
				ringColor: [
					'responsive',
					'hover',
					'active',
					'first',
					'last',
					'focus',
					'even',
					'odd',
					'group-hover'
				],
				ringOpacity: [
					'responsive',
					'hover',
					'active',
					'first',
					'last',
					'focus',
					'even',
					'odd',
					'group-hover'
				],
				padding: ['responsive', 'last', 'first', 'hover', 'focus', 'even', 'odd'],
				fontSize: ['responsive', 'last', 'first', 'hover', 'focus', 'even', 'odd'],
				gap: ['responsive', 'last', 'first', 'hover', 'focus', 'even', 'odd'],
				stroke: [
					'responsive',
					'hover',
					'focus',
					'last',
					'first',
					'even',
					'odd',
					'group-hover'
				],
				fill: [
					'responsive',
					'hover',
					'focus',
					'last',
					'first',
					'even',
					'odd',
					'group-hover'
				],
				gridTemplateColumns: [
					'responsive',
					'last',
					'first',
					'hover',
					'focus',
					'even',
					'odd'
				],
				animation: [
					'responsive',
					'hover',
					'focus',
					'last',
					'first',
					'motion-safe',
					'motion-reduce',
					'even',
					'odd'
				],
				transitionProperty: [
					'responsive',
					'hover',
					'focus',
					'last',
					'first',
					'motion-safe',
					'motion-reduce',
					'even',
					'odd'
				],
				transitionDuration: [
					'responsive',
					'last',
					'first',
					'hover',
					'focus',
					'even',
					'odd'
				],
				transitionTimingFunction: [
					'responsive',
					'last',
					'first',
					'hover',
					'focus',
					'even',
					'odd'
				],
				transitionDelay: [
					'responsive',
					'last',
					'first',
					'hover',
					'focus',
					'even',
					'odd'
				],
				scale: [
					'responsive',
					'hover',
					'focus',
					'active',
					'group-hover',
					'first',
					'last',
					'even',
					'odd'
				],
				rotate: [
					'responsive',
					'hover',
					'focus',
					'active',
					'group-hover',
					'first',
					'last',
					'even',
					'odd'
				]
			}
		}
	},
	variants: {
		margin: ['responsive', 'first', 'last'],
		padding: ['responsive', 'first', 'last'],
		scale: ['hover']
	},
	plugins: [
		require('tailwindcss-gradients'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/ui'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio')
	]
};
