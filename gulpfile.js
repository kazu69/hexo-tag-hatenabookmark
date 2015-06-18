'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

gulp.task('build', function() {
    gulp.src('src/hatenabookmark.js')
        .pipe($.babel())
        .pipe(gulp.dest('lib'));
});
