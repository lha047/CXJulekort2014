/**
 * Created by lha on 18.10.2014.
 */
var gulp = require('gulp');
var uflify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');

gulp.task('default', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass({sourcemap: true, sourcemapPath: 'scss'}))
        .on('error', function(err) {console.log(err.message)})
        .pipe(gulp.dest('dist/css'));
});
var watcher = gulp.watch('scss/*.scss', ['default']);
watcher.on('change', function(event){
   console.log('File '+ event.path + ' was ' + event.type + ', running tasks..');
});
gulp.task('scripts', function(){
    gulp.src('src/*.js')
        .pipe(uflify())
        .pipe(gulp.dest('dist'));
})