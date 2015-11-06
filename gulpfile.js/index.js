'use strict';

var config = require('./config');
var gulp = require('gulp');

// Load tasks
var scripts = require('./tasks/scripts');
var styles = require('./tasks/styles');

// Define tasks
gulp.task('scripts', scripts);
gulp.task('styles', styles);

if (config.production) {
	gulp.task('default', ['scripts', 'styles']);
} else {
	var watch = require('./tasks/watch');
	
	gulp.task('default', ['scripts', 'styles', 'watch']);
	gulp.task('watch', watch);
}
