var gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts', function() {
  webpack(require('../../webpack.config.js'), function() {
  });
});