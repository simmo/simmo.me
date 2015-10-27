'use strict';

var browserSync		= require('browser-sync');
var gulp            = require('gulp');

gulp.task('watch', ['browser-sync'], function() {

    gulp.watch(['sass/**/*.scss', 'components/**/*.scss'], ['styles']);

    gulp.watch(['javascript/**/*', 'components/**/*.js'], ['scripts']);

	gulp.watch('public/**/*').on('change', browserSync.reload);

    gulp.watch('templates/**/*.html').on('change', browserSync.reload);

});
