// gulpの読み込み
var gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
ejs = require('gulp-ejs'),
fs = require('fs');


gulp.task("sass", function() {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass({
      outputStyle:'expanded'
    }))
    .pipe(autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
    }))
    .pipe(gulp.dest('dest/css/'));
});

gulp.task("ejs", function() {
  var json = JSON.parse(fs.readFileSync('./src/data/sample01.json'));
  return gulp.src('./src/ejs/*.ejs')
    .pipe(ejs(json,{},{"ext": ".html"}))
    .pipe(gulp.dest('dest/html/'));
});

gulp.task("default", ['sass','ejs']);

gulp.task("watch", function() {
  gulp.watch("src/ejs/*.ejs",["ejs"]);
  gulp.watch("src/ejs/common/*.ejs",["ejs"]);
  gulp.watch("src/ejs/template/*.ejs",["ejs"]);
  gulp.watch("src/scss/*.scss",["sass"]);
});
