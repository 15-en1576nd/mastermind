const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		minWidth: {
			0: '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			max: 'max-content',
			min: 'min-content',
			full: '100%',
			sm: '16rem'
		}
	},

	plugins: []
};

module.exports = config;
