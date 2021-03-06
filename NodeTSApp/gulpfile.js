/*jslint node: true */
/** Gulp build pipe*/
const gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true}),
    gu = require('gulp-util')
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del');



// Set of gulp tasks
// 1. Clean build dir
// Clean build target ./dist-server dir
const cleanServer = function () {
    return del([
        './dist-server'
    ]);
};
gulp.task('clean-server', cleanServer);

// Build server
// TS-Config
const tsProject = ts.createProject('tsconfig.json');
const tsSever = function() {
    // var tsResult = gulp.src("./sources/**/*.ts") // or tsProject.src()
    //     .pipe(tsProject());
    // return tsResult.js.pipe(gulp.dest('dist-server'));

    var tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist-server'));

}
gulp.task('ts-server', tsSever);
gulp.task('default', gulp.series('clean-server', 'ts-server'));
