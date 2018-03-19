var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('serv', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      open: true
    }));
});


//styles
gulp.task('style', function () {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 15 versions']
    }))
    .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function(){
  gulp.watch('app/sass/**/*.sass', ['style']);
})

gulp.task('default', ['serv', 'watch']);