var gulp = require('gulp');
var eslint = require('gulp-eslint');
var babel = require('gulp-babel');
var mocha = require('gulp-mocha');
var rename = require('gulp-rename');

gulp.task('test', function(){ 
    gulp.src('./test/index.js')
        .pipe(mocha())
        .once('error', function( err ){
            console.error(err);
        });
});

gulp.task('lint', function(){
    return gulp.src(['**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
 
gulp.task('build', function(){
    return gulp.src('.src/index.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(rename("src/kiss-tml.js"))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['test', 'lint', 'build'], function () {
    console.log("DONE!, everything is perfect.");
});