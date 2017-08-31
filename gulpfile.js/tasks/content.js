const path = require('path');
const gulp = require('gulp');
const shell = require('gulp-shell');
const inlineCSS = require('gulp-inline-css');
const config = require('../config');

const options = {
    ignoreErrors: !config.prod,
};

gulp.task('content', shell.task([
    `wrangler build ${config.paths.content} ${config.paths.www} --force`,
], options));


gulp.task('content:inline', function() {
    return gulp.src(path.join(config.paths.www, '*', '*.html'))
        .pipe(inlineCSS({
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true
        }))
        .pipe(gulp.dest(config.paths.www));
});
