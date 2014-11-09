'use strict';
// generated on 2014-10-29 using generator-gulp-webapp 0.1.0

var gulp = require('gulp'),
inject = require('gulp-inject'),
plumber = require('gulp-plumber'),
connect = require('gulp-connect');


// livereload plugins
var $ = require('gulp-load-plugins')();

gulp.task('default', ['connect', 'watch'], function () {
    
});

gulp.task('watch', [], function () {    

    gulp.watch(['app/styles/**/*.scss', 'app/styles/**/*.css'], ['styles']);
    gulp.watch('app/scripts/**/*.js', ['scripts']);
    gulp.watch('app/images/**/*', ['images']);
    gulp.watch('app/index.html', ['html']);
    gulp.watch('bower.json', ['wiredep']);
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
    return gulp.src('app/styles/main.scss')
        .pipe(plumber())
        .pipe($.rubySass({
            style: 'expanded',
            precision: 10
        }))
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe($.size())
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
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');

    return gulp.src('app/*.html')
        .pipe(plumber())
        .pipe($.useref.assets({searchPath: '{.tmp,app}'}))
        .pipe(jsFilter)
        .pipe($.uglify())
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe($.useref.restore())
        .pipe($.useref())
        .pipe(gulp.dest('dist'))
        .pipe($.size())
        .pipe(connect.reload());
});

gulp.task('images', function () {
    return gulp.src('app/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe($.size());
});

gulp.task('fonts', function () {
    return $.bowerFiles()
        .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
        .pipe($.flatten())
        .pipe(gulp.dest('dist/fonts'))
        .pipe($.size());
});

gulp.task('extras', function () {
    return gulp.src(['app/*.*', '!app/*.html'], { dot: true })
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return gulp.src(['.tmp', 'dist'], { read: false }).pipe($.clean());
});

gulp.task('build', ['html', 'images', 'fonts', 'extras']);


gulp.task('serve', ['connect', 'styles'], function () {
    require('opn')('http://localhost:9000');
});

// inject bower components
gulp.task('wiredep', function () {
    var wiredep = require('wiredep').stream;

    gulp.src('app/styles/*.scss')
        .pipe(wiredep({
            directory: 'app/bower_components'
        }))
        .pipe(gulp.dest('app/styles'));

    gulp.src('app/*.html')
        .pipe(wiredep({
            directory: 'app/bower_components',
            exclude: ['bootstrap-sass-official']
        }))
        .pipe(gulp.dest('app'));
});

