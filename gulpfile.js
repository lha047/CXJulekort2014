/**
 * Created by lha on 18.10.2014.
 */
var gulp = require('gulp');
var uflify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');

gulp.task('default',['watch'], function() {

});
gulp.task('watch', function(){
    gulp.watch('scss/*.scss', ['styles']);
})
gulp.task('styles', function(){
   return gulp.src('scss/*.scss')
       .pipe(sass({sourcemap: true, sourcemapPath: 'scss'}))
       .pipe(gulp.dest('css'));

});
//return gulp.src('scss/*.scss')
//    .pipe(sass({sourcemap: true, sourcemapPath: 'scss'}))
//    .on('error', function(err) {console.log(err.message)})
//    .pipe(gulp.dest('dist/css'));

gulp.task('scripts', function(){
    gulp.src('src/*.js')
        .pipe(uflify())
        .pipe(gulp.dest('dist'));
})