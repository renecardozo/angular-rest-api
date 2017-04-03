var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var paths = require('../config');
var gulp =  require('gulp');
module.exports = {
  styles: function(){
    return gulp.src(paths.gulp.styles.src)
            .pipe(cleanCSS())
            .pipe(rename({
              basename: 'styles',
              suffix: '.min'
            }))
            .pipe(gulp.dest(paths.gulp.styles.dest))
  }
}