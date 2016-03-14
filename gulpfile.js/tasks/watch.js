'use strict';

var browserSync = require('browser-sync');
var gulp        = require('gulp');

module.exports = function() {

    browserSync.init({
        proxy: 'localhost:8080'
    });

    gulp.watch(['sass/**/*.scss', 'components/**/*.scss'], ['styles']);

    gulp.watch(['javascript/**/*', 'components/**/*.js'], ['scripts']);

    gulp.watch('public/**/*').on('change', browserSync.reload);

};
