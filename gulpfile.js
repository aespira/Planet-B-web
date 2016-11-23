var gulp = require('gulp'),
  compass = require('gulp-compass'),
  eslint = require('gulp-eslint');
  // cache = require('gulp-cache'),
  // del = require('del');
  // cssnano = require('gulp-cssnano'),
  // uglify = require('gulp-uglify'),
  // imagemin = require('gulp-imagemin'),
  // rename = require('gulp-rename'),
  // concat = require('gulp-concat'),
  // notify = require('gulp-notify');

var logErrorToConsole = function(error) {
  console.log(error);
  this.emit('end');
};

gulp.task('compass', function() {
  return gulp.src('sass/**/*.scss')
             .pipe(compass({
                config_file: './config.rb',
                css: 'app/styles',
                sass: 'sass'
             }))
             .pipe(gulp.dest('app/styles'))
             .on('error', logErrorToConsole);
});

gulp.task('eslint', function() {
  return gulp.src('app/scripts/**/*.js')
             .pipe(eslint())
             .pipe(eslint.format())
             .pipe(eslint.failAfterError())
             .on('error', logErrorToConsole);
});

gulp.task('default', ['compass', 'eslint']);