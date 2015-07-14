'use strict';

var gulp = require('gulp');
var metal = require('gulp-metal');

metal.registerTasks({
	buildSrc: 'bower_components/steel-*/src/**/*.js',
	mainBuildJsTasks: ['build:globals', 'build:jquery', 'build:amd'],
	bundleFileName: 'steel.js',
	cssSrc: 'bower_components/steel-*/src/**/*.css',
	globalName: 'steel',
	scssSrc: 'bower_components/steel-*/src/**/*.scss'
});

gulp.task('default', ['build:globals', 'build:amd', 'build:jquery']);
