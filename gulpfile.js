var gulp = require('gulp');
var taskClean = require('./gulp-tasks/clean');
var taskStyles = require('./gulp-tasks/styles');
var taskConcat = require('./gulp-tasks/concat');
var taskIndext = require('./gulp-tasks/inject');
var taskLivereload = require('./gulp-tasks/livereload');
var copyBower = require('./gulp-tasks/copy-bower');
var copySource = require('./gulp-tasks/copy-sources');
var cleanTempSource = require('./gulp-tasks/clean-temp-sources');
var copyHtml = require('./gulp-tasks/copy-html');
var production = gulp.series( 
                              taskClean.clean,
                              taskStyles.styles, 
                              taskConcat.concat,
                              copyHtml.copyHtml,
                              copyBower.copyBower,
                              taskIndext.index,
                              copySource.copySources,
                              cleanTempSource.cleanTempSource
                              );
gulp.task('default', production);
gulp.task('production', production);
gulp.task('clean', taskClean.clean);
gulp.task('cssmin', taskStyles.styles);
gulp.task('jsmin', taskConcat.concat);
gulp.task('index', taskIndext.index);
gulp.task('copy-bower', copyBower.copyBower);
gulp.task('server', taskLivereload.webserver)
