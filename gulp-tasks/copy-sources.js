var gulp = require('gulp');
module.exports = {
  copySources: function(){
    return gulp.src([
      './*.min.js',
      './*.min.css'
    ])
    .pipe(gulp.dest('./dist/'));
  }
}