var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel')
var paths = require('../config');

module.exports = {
  concat: function (){
    return gulp.src(paths.gulp.scripts.src, {sourcemaps:true})
      .pipe(babel({
          presets: ['es2015']
      }))
      .pipe(concat('app.min.js'))
      .pipe(gulp.dest(paths.gulp.scripts.dest));
  }
}