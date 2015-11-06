'use strict';

module.exports = {
    autoprefixer: {
        browsers: [
            'last 2 versions'
        ]
    },
    production: (process.env.NODE_ENV === 'production'),
    sass: {
        errLogToConsole: true,
        dist: 'public/css',
        src: 'sass/*.scss',
        outputStyle: 'expanded'
    },
    scripts: {
        src: ['components/**/*', 'javascript/**/*'],
        dist: 'public/javascripts'
    }
};
