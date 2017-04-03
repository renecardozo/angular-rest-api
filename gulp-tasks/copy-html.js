var gulp = require('gulp');
module.exports = {
  copyHtml: function(){
    return gulp.src([
      './app/components/repo/*.html',
      './app/components/user/*.html'
    ])
    .pipe(gulp.dest('./dist/'));
  }
}