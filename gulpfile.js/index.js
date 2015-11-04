'use strict';

var config = require('./config');
var gulp = require('gulp');

// Load tasks
var scripts = require('./tasks/scripts');
var styles = require('./tasks/styles');
var watch = require('./tasks/watch');

// Define tasks
gulp.task('scripts', scripts);
gulp.task('styles', styles);

if (config.production) {
	gulp.task('default', ['scripts', 'styles']);
} else {
	gulp.task('default', ['scripts', 'styles', 'watch']);
	gulp.task('watch', watch);
}
