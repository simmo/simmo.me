'use strict';

var config			= require('../config');
var eslint          = require('gulp-eslint');
var gulp            = require('gulp');

module.exports = function() {

	return gulp.src(config.scripts.src)
		.pipe(eslint())
	    .pipe(eslint.format());

};
