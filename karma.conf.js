var metal = require('gulp-metal');

var babelOptions = {
	resolveModuleSource: metal.renameAlias,
	sourceMap: 'both'
};

module.exports = function (config) {
	config.set({
		frameworks: ['mocha', 'chai', 'source-map-support', 'commonjs'],

		files: [
			'bower_components/soyutils/soyutils.js',
			'bower_components/metal*/src/**/*.js',
			'bower_components/crystal*/src/**/*.js',
			'bower_components/steel*/src/**/*.js',
			'bower_components/steel*/test/**/*.js'
		],

		preprocessors: {
			'bower_components/metal*/src/**/*.js': ['babel', 'commonjs'],
			'bower_components/crystal*/src/**/*.js': ['babel', 'commonjs'],
			'bower_components/steel*/src/**/*.js': ['babel', 'commonjs'],
			'bower_components/steel*/test/**/*.js': ['babel', 'commonjs']
		},

		browsers: ['Chrome'],

		babelPreprocessor: {options: babelOptions}
	});
}
