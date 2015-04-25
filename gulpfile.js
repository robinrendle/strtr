// Default gulpfile tasks for strtr

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    prefix = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    size = require('gulp-size'),
    imageop = require('gulp-image-optimization'),
    svgo = require('gulp-svgo'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;



// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch(['src/sass/*.scss', 'src/sass/**/*.scss' ], ['sass']);
    gulp.watch("index.html").on('change', reload);
});

// Compiles scss into the build/css dir
gulp.task('sass', function(){
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(prefix())
        .pipe(gulp.dest('./build/css'))
        .pipe(reload({stream: true}));
});

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

// Default tasks
gulp.task('default', ['build', 'serve']);
