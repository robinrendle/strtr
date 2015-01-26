// Default gulpfile tasks for strtr

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    prefix = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    size = require('gulp-size');


// Compiles scss into the build/css dir
gulp.task('sass', function(){
    gulp.src('./sass/project.scss')
        .pipe(watch(function(files){
            return files.pipe(sass())
                .pipe(prefix())
                .pipe(size({gzip: true, showFiles: true, title:'unminified project.css'}))
                .pipe(gulp.dest('./build/css'))
        }));
});

// Minifies CSS
gulp.task('minify', function(){
    gulp.src('./build/css/project.css')
        .pipe(size({gzip: true, showFiles: true, title:'minified project.css'}))
        .pipe(minifyCSS())
        .pipe(rename('project.min.css'))
        .pipe(gulp.dest('./build/css/'))
        .pipe(size({gzip: true, showFiles: true, title:'minified project.css'}));
});

// Autoprefixes on minified CSS
gulp.task('prefix', function(){
    gulp.src('./build/css/*.css')
        .pipe(prefix())
        .pipe(gulp.dest('./build/css'));
});


gulp.task('default', function(){
    gulp.watch('./sass/project.scss', ['sass']);
    gulp.watch('./sass/*.scss', ['sass']);
});
