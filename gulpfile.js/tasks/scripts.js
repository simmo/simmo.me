'use strict';

var browserify		= require('browserify');
var browserSync 	= require('browser-sync');
var buffer          = require('vinyl-buffer');
var config			= require('../config');
var gulp            = require('gulp');
var gutil           = require('gulp-util');
var uglify          = require('gulp-uglify');
var source			= require('vinyl-source-stream');

gulp.task('scripts', function() {

	return browserify('./javascript/app.js', {
        	debug: !config.production
        })
        .bundle()
        .on('error', function(err) {
            console.log(err);
        	this.emit('end');
        })
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(config.production ? uglify() : gutil.noop())
        .pipe(gulp.dest(config.scripts.dist))
        .pipe(config.production ? gutil.noop() : browserSync.reload({ stream: true }));

});
