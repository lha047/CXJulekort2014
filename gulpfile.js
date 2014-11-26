'use strict';
// generated on 2014-10-29 using generator-gulp-webapp 0.1.0

var gulp = require('gulp'),
inject = require('gulp-inject'),
plumber = require('gulp-plumber'),
connect = require('gulp-connect'),
sass = require('gulp-sass'),
install = require('gulp-install');


// livereload plugins
var $ = require('gulp-load-plugins')();

gulp.task('default', ['install', 'connect', 'watch'], function () {

});

gulp.task('watch', [], function () {

    gulp.watch(['app/styles/new/*.scss', 'app/styles/new/*.css'], ['sass', 'styles']);
    gulp.watch('app/scripts/**/*.js', ['scripts']);
    gulp.watch('app/images/**/*', ['images']);
    gulp.watch('app/index.html', ['html']);
    gulp.watch('bower.json', ['wiredep']);
});

gulp.task('sass', function(){
   gulp.src('app/styles/new/*.scss')
       .pipe(plumber())
       .pipe(sass())
       .pipe(gulp.dest('app/styles/new/css'))
       .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        root : ['app'],
        port: 9000,
        livereload: true
    });
});

gulp.task('index', function() {
   var sources = gulp.src(['app/bower_components/**/*.min.js','app/lib/*.js','app/styles/new/css/*.css'], {read: false});
   var target = gulp.src('app/index.html');
   return target.pipe(inject(sources)).pipe(gulp.dest('app'));
});

gulp.task('styles', function () {
    return gulp.src(['app/styles/new/css/*.css'])
        .pipe(plumber())
        .pipe(connect.reload());
});

gulp.task('scripts', function () {
    return gulp.src('app/scripts/**/*.js')
        .pipe(plumber())
        .pipe($.jshint())
        .pipe($.jshint.reporter(require('jshint-stylish')))
        .pipe($.size())
        .pipe(connect.reload());
});

gulp.task('html', ['styles', 'scripts'], function () {
    return gulp.src('app/*.html')
        .pipe(plumber())
        .pipe(connect.reload());
});
gulp.task('install', function(){
    gulp.src(['./bower.json', './package.json'])
        .pipe(install());
});

gulp.task('images', function() {

});

