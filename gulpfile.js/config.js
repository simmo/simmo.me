'use strict';

module.exports = {
    autoprefixer: {
        browsers: [
            'last 2 versions'
        ]
    },
    sass: {
        errLogToConsole: true,
        dist: 'public/css',
        src: 'sass/*.scss',
        outputStyle: 'expanded'
    },
    scripts: {
        src: 'coffeescript/*.coffee',
        dist: 'public/javascripts'
    }
};
