var gulp = require('gulp');

var uglify = require('gulp-uglify');

var sass = require('gulp-ruby-sass');

var plumber = require('gulp-plumber');

// Tasks

gulp.task('scripts', function(){
	gulp.src('js/*.js').pipe(plumber()).pipe(uglify()).pipe(gulp.dest('minjs'));	
})

gulp.task('styles', function(){
	gulp.src('scss/**/*.scss').pipe(plumber()).pipe(sass({sytle: 'compressed'})).pipe(gulp.dest('mincss/'));	
})

gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts'])
	gulp.watch('scss/**/*.scss', ['styles'])
});

gulp.task('default', ['scripts', 'watch']);