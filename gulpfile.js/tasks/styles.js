'use strict';

var autoprefixer    = require('gulp-autoprefixer');
var browserSync		= require('browser-sync');
var config			= require('../config');
var gulp            = require('gulp');
var gutil			= require('gulp-util');
var minifyCss		= require('gulp-minify-css');
var sass            = require('gulp-sass');

gulp.task('styles', function() {

    gulp.src(config.sass.src)
        .pipe(sass(config.sass))
	        .on('error', gutil.log.bind(gutil, 'Sass Error'))
        .pipe(autoprefixer(config.autoprefixer))
        	.on('error', gutil.log.bind(gutil, 'Autoprefixer Error'))
        // .pipe(minifyCss())
        .pipe(gulp.dest(config.sass.dist))
        .pipe(browserSync.reload({ stream: true }));

});
