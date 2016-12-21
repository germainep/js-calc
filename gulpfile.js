var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var concat = require('gulp-concat');
var autoprefix = require('gulp-autoprefixer');
var gutil = require('gulp-util');

var paths = {
  js: ['./src/js/calc.js', './src/js/calc-controllers.js', './src/js/calc-services.js'],
  css: './src/sass/main.sass',
  pug: './src/*.pug'
};
gulp.task('sass', function() {
  gulp.src(paths.css)
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefix({
    browsers: ['last 5 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('./dist/css'))
});

gulp.task('html', function() {
  gulp.src(paths.pug)
  .pipe(pug().on('error', gutil.log))
  .pipe(gulp.dest('./dist'))
});

gulp.task('js', function() {
  gulp.src(paths.js)
  .pipe(concat('main.js'))
  .pipe(gulp.dest('./dist/js'))
});

gulp.task('watcher', function() {
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.pug, ['html']);
  gulp.watch('./src/sass/*.sass', ['sass']);
});

gulp.task('default', ['sass', 'html', 'js']);
