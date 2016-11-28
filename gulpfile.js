var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  compass = require('gulp-compass'),
  jshint = require('gulp-jshint'),
  cache = require('gulp-cache'),
  del = require('del');


gulp.task('default', function () {

  // Compile SCSS style
  gulp.src('sass/**/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'stylesheets',
      sass: 'sass'
    }))
    // .pipe(jshint())
    // .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('app/styles'));
});
