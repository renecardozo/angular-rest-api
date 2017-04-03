var gulp = require('gulp');
module.exports = {
  copyBower: function(){
    return gulp.src([
      './bower_components/**/*'
    ])
    .pipe(gulp.dest('./dist/bower_components/'));
  }
}