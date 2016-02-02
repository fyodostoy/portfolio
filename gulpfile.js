var gulp = require('gulp');
var sass = require ('gulp-sass');
var autoprefixer = require ('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', ['styles'], function() {
    gulp.watch('styles/**/*.scss', ['styles']);
    //gulp.watch('app/js/**/*.js', ['scripts']);
});

gulp.task('styles', function() {
    gulp.src('styles/**/*.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(autoprefixer({browsers: ['last 3 versions']}))
            .pipe(gulp.dest('dist/styles'));
});

gulp.task('vendor-styles', function() {
    gulp.src(['styles/bootstrap.min.css', 'styles/**/*.min.css'])
            .pipe(concat('vendor-styles.css'))
            .pipe(gulp.dest('dist/styles'));
});
