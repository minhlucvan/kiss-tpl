const gulp = require('gulp');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');

gulp.task('test', function(){ 
    gulp.src('./test/index.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
    }
);

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