'use strict';

var browserSync   	= require('browser-sync');
var gulp			= require('gulp');

gulp.task('browser-sync', function() {

	browserSync.init({
        proxy: 'localhost:8080'
    });

});
