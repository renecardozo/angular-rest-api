var gulp = require('gulp');
var webserver = require('gulp-server-livereload');

module.exports = {
  webserver: function(){
    return gulp.src('./dist')
      .pipe(webserver({
        livereload: true,
        directoryListing: {enable: true,
    path: 'dist'},
        open: true,
        port:             8081,
        defaultFile: 'index.html'
      }));
  }
}