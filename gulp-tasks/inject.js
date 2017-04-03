var gulp = require('gulp');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');
var paths = require('../config');
module.exports = {
  index: function(){
    var target = gulp.src(paths.gulp.inject.target);
    var source = gulp.src([paths.gulp.inject.css, paths.gulp.inject.js], {read:false});
    return target.pipe(inject(source))
                .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
                .pipe(gulp.dest('./dist/'));
  }
}