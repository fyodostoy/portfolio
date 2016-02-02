var gulp = require('gulp');
var sass = require ('gulp-sass');
var autoprefixer = require ('gulp-autoprefixer');
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
//var clean = require('gulp-clean');
 
gulp.task('default', ['styles', 'scripts'], function() {
    gulp.watch('app/sass/**/*.scss', ['styles']);
    //gulp.watch('app/js/**/*.js', ['lint']);
    gulp.watch('app/js/**/*.js', ['scripts']);
});

gulp.task('lint', function () {
    return gulp.src(['app/js/**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});



gulp.task('clean-scripts', function () {
  return gulp.src('app.js', {read: false})
    .pipe(clean());
});
 
gulp.task('scripts', function() {
    gulp.src('app/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('app'));
});




// prepare for dist // 

gulp.task('dist', [
    'copy-html',
    'copy-images',
    'styles',
    'scripts-dist']);

/*gulp.task('clean-scripts-dist', function () {
  return gulp.src('app/dist/js/app.js', {read: false})
    .pipe(clean());
});*/

gulp.task('scripts-dist', function() {
    gulp.src('app/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/dist/js'));
});

gulp.task('copy-html', function() {
   gulp.src('app/index.html').pipe(gulp.dest('app/dist')) ;
});

gulp.task('copy-images', function() {
   gulp.src('app/img/*').pipe(gulp.dest('app/dist/img')) ;
});

gulp.task('styles', function() {
    gulp.src('app/sass/**/*.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(autoprefixer({browsers: ['last 3 versions']}))
            .pipe(gulp.dest('app/dist/css'));
});

