var gulp = require('gulp');
var watch = require('gulp-watch');                              //监听文件变化
var livereload = require('gulp-livereload');


gulp.task('browser', function(){
 return gulp.src('./').pipe(livereload());
})



gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['./**'],['browser']);

});





gulp.task('default', ['watch']);