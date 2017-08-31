const config = require('../config');
const gulp = require('gulp');
const path = require('path');
const size = require('gulp-size');
const shell = require('gulp-shell');
const bs = require('browser-sync').get('main');

gulp.task('images', () => {
    return gulp
        .src(path.join(config.paths.imagesSrc, '*.{png,gif,jpg,jpeg,svg}'))
        .pipe(size({ title: 'Images', gzip: true }))
        .pipe(gulp.dest(config.paths.www))
        .pipe(bs.stream());
});

gulp.task('images:zip', shell.task([
    `zip -r --junk-paths ${path.join(config.paths.www, 'images.zip')} ${config.paths.imagesSrc}`,
]));
