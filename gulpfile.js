'use strict';

var gulp = require('gulp');
var lazypipe = require('lazypipe');
var metal = require('gulp-metal');
var path = require('path');

metal.registerTasks({
	buildSrc: 'bower_components/steel-*/src/**/*.js',
	mainBuildJsTasks: ['build:globals', 'build:jquery', 'build:amd'],
	bundleFileName: 'steel.js',
	cssSrc: 'bower_components/steel-*/src/**/*.css',
	globalName: 'steel',
	scssSrc: 'bower_components/steel-*/src/**/*.scss'
});

gulp.task('soy', ['soy:crystal'], function() {
	return gulp.src('bower_components/steel-*/src/**/*.soy')
		.pipe(compileSoy()());
});

gulp.task('soy:crystal', function() {
	return gulp.src('bower_components/crystal-*/src/**/*.soy')
		.pipe(compileSoy()());
});

gulp.task('default', ['build:globals', 'build:amd', 'build:jquery']);

function compileSoy() {
	return lazypipe()
		.pipe(metal.soy.generateSoy())
		.pipe(gulp.dest, function(file) {
			var index = file.relative.indexOf(path.sep + 'src' + path.sep);
			file.base = path.join(file.base, file.relative.substr(0, index + 5));
			return 'build/soy';
		});
}
