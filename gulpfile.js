// Default gulpfile tasks for strtr

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    prefix = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    size = require('gulp-size'),
    imageop = require('gulp-image-optimization'),
    svgo = require('gulp-svgo');

// SVG optimisation 
gulp.task('svg', function(){
    gulp.src('./src/img/*.svg')
        .pipe(size({gzip: true, showFiles: true}))
        .pipe(svgo())
        .pipe(size({gzip: true, showFiles: true}))
        .pipe(gulp.dest('./build/img'));
});

// Image optimization from /img to /build/img
gulp.task('images', function(cb){
    gulp.src(['./src/img/**/*.png','./src/img/**/*.jpg','./src/img/**/*.gif','./src/img/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    }))
    .pipe(size({gzip: true, showFiles: true}))
    .pipe(gulp.dest('./build/img')).on('end', cb).on('error', cb);
});


// Compiles scss into the build/css dir
gulp.task('sass', function(){
    gulp.src('./src/sass/project.scss')
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

// Tasks for production
gulp.task('build', ['images', 'minify', 'svg']);

// Watch tasks
gulp.task('default', function(){
    gulp.watch('./src/sass/project.scss', ['sass']);
    gulp.watch('./src/sass/*.scss', ['sass']);
});
