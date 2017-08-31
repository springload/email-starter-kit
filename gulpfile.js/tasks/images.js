const config = require('../config');
const gulp = require('gulp');
const path = require('path');
const size = require('gulp-size');
const bs = require('browser-sync').get('main');

gulp.task('images', () => {
    return gulp
        .src(path.join(config.paths.imagesSrc, '*.{png,gif,jpg,jpeg,svg}'))
        .pipe(size({ title: 'Images', gzip: true }))
        .pipe(gulp.dest(config.paths.www))
        .pipe(bs.stream());
});
