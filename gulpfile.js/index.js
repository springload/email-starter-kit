require('./tasks/watch');
require('./tasks/content');
require('./tasks/images');
require('./tasks/css');

const gulp = require('gulp');

gulp.task('build', ['css', 'images', 'content']);
gulp.task('default', ['build']);
