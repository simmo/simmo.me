'use strict';

var browserify		= require('browserify');
var browserSync 	= require('browser-sync');
var config			= require('../config');
var gulp            = require('gulp');
var source			= require('vinyl-source-stream');

gulp.task('scripts', function() {

	return browserify('./javascript/app.js', {
        	debug: true
        })
        .bundle()
        .on('error', function(err) {
                console.log(err);
        	this.emit('end');
        })
        .pipe(source('app.js'))
        .pipe(gulp.dest(config.scripts.dist))
        .pipe(browserSync.reload({ stream: true }));

});
