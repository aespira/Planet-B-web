var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  compass = require('gulp-compass'),
  jshint = require('gulp-jshint'),
  cache = require('gulp-cache'),
  del = require('del');
  // cssnano = require('gulp-cssnano'),
  // uglify = require('gulp-uglify'),
  // imagemin = require('gulp-imagemin'),
  // rename = require('gulp-rename'),
  // concat = require('gulp-concat'),
  // notify = require('gulp-notify');


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
