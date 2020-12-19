import random from 'lodash.random';

export function ColorsSvg() {
	const colors = [
		'#6497b1',
		'#005b96',
		// '#03396c',
		'#011f4b',
		// '#b3cde0',
		'#173972',
		'#234670',
		'#14505c'
		// '#37B679',
		// '#DA3C3C',
		// '#3291FF',
		// '#7928CA',
		// '#79FFE1',
		// '#E535AB',
		// '#3333CC',
		// '#B3DDF2'
		//234670
		// '#234670',
		// '#f1fcf7'
		// '#3291FF',
		// '#7928CA',
		// '#79FFE1',
		// '#E535AB',
		// '#3333CC',
		// '#B3DDF2'
		//'#234670'
	];
	const getRandomIdx = () => random(0, colors.length - 1);
	let idx = getRandomIdx();
	let idx2 = getRandomIdx();

	// Has to be a different color
	while (idx2 === idx) {
		idx2 = getRandomIdx();
	}

	// Returns a pair of colors
	return [colors[idx], colors[idx2]];
}
