'use strict';
// generated on 2014-10-29 using generator-gulp-webapp 0.1.0

var gulp = require('gulp'),
inject = require('gulp-inject'),
plumber = require('gulp-plumber'),
connect = require('gulp-connect'),
sass = require('gulp-sass');


// livereload plugins
var $ = require('gulp-load-plugins')();

gulp.task('default', ['connect', 'watch'], function () {
    
});

gulp.task('watch', [], function () {    

    gulp.watch(['app/styles/**/*.scss', 'app/styles/**/*.css'], ['sass', 'styles']);
    gulp.watch('app/scripts/**/*.js', ['scripts']);
    gulp.watch('app/images/**/*', ['images']);
    gulp.watch('app/index.html', ['html']);
    gulp.watch('bower.json', ['wiredep']);
});

gulp.task('sass', function(){
   gulp.src('app/styles/*.scss')
       .pipe(plumber())
       .pipe(sass())
       .pipe(gulp.dest('app/styles/css'))
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
   var sources = gulp.src(['app/bower_components/**/*.min.js','app/lib/*.js','app/styles/css/*.css'], {read: false});
   var target = gulp.src('app/index.html');
   return target.pipe(inject(sources)).pipe(gulp.dest('app'));
});

gulp.task('styles', function () {
    return gulp.src(['app/styles/main.scss', 'app/styles/css/*.css'])
        .pipe(plumber())
        // .pipe($.rubySass({
            // style: 'expanded',
            // precision: 10
        // }))
        // .pipe($.autoprefixer('last 1 version'))
        // .pipe(gulp.dest('.tmp/styles'))
        // .pipe($.size())
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


// gulp.task('serve', ['connect', 'styles'], function () {
//     require('opn')('http://localhost:9000');
// });

// inject bower components
// gulp.task('wiredep', function () {
//     var wiredep = require('wiredep').stream;

//     gulp.src('app/styles/*.scss')
//         .pipe(wiredep({
//             directory: 'app/bower_components'
//         }))
//         .pipe(gulp.dest('app/styles'));

//     gulp.src('app/*.html')
//         .pipe(wiredep({
//             directory: 'app/bower_components',
//             exclude: ['bootstrap-sass-official']
//         }))
//         .pipe(gulp.dest('app'));
// });

