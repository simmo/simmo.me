'use strict';

var config = require('../config');
var gulp   = require('gulp');

gulp.task('default', config.production ? ['scripts', 'styles'] : ['browser-sync', 'scripts', 'styles', 'watch']);
