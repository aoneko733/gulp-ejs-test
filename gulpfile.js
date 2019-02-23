// gulpの読み込み
var gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
ejs = require('gulp-ejs'),
merge = require('gulp-merge-json'),
fs = require('fs'),
minify = require('gulp-uglify'),
rename = require('gulp-rename');


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

gulp.task("merge", function(){
  return gulp.src('./src/data/_*.json')
    .pipe(merge({
      fileName: 'samples.json'
    }))
    .pipe(gulp.dest('./src/data/'));
});

gulp.task("ejs", function() {
  var json = JSON.parse(fs.readFileSync('./src/data/samples.json'));
  return gulp.src('./src/ejs/*.ejs')
    .pipe(ejs(json,{},{"ext": ".html"}))
    .pipe(gulp.dest('dest/'));
});

gulp.task('minify', function() {
  gulp.src(['./src/js/*.js'])
    .pipe(minify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest('dest/js/'));
});

gulp.task("default", ['sass',"merge",'ejs','minify']);

gulp.task("watch", function() {
  gulp.watch("src/ejs/*.ejs",["ejs"]);
  gulp.watch("src/ejs/common/*.ejs",["ejs"]);
  gulp.watch("src/ejs/template/*.ejs",["ejs"]);
  gulp.watch("src/scss/*.scss",["sass"]);
  gulp.watch("src/js/*.js",["minify"]);
});
