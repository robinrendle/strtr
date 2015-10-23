var gulp = require('gulp'),
    clean = require("gulp-clean"),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    size = require('gulp-size'),
    imageop = require('gulp-image-optimization'),
    browserSync = require("browser-sync").create(),
    concat = require("gulp-concat"),
    // IMAGES
    // SCRIPTS
    uglify = require("gulp-uglify"),
    jshint = require("gulp-jshint"),
    // PATHS
    paths = {
        styles: {
            src: "src/sass/project.scss",
            dest: "build/css",
            watch: "src/sass/**/*.*",
        },
        scripts: {
            libs: [
                "src/js/lib/jquery.js",
                "src/js/lib/jquery.validation.js"
            ],
            src: [
                "src/js/app.js"
            ],
            dest: "build/js/",
            watch: "src/js/**/*.*",
        },
        images: {
            src: [
                "src/img/*.*",
            ],
            dest: "build/img"
        },
        watch: [
            "index.html",
        ],
    };

// Static Server
gulp.task('browser-sync', ['styles', 'scripts'], function() {
    browserSync.init([paths.watch], {
        server: "./"
    });

    gulp.watch(paths.styles.watch, ['styles']);
    gulp.watch(paths.scripts.watch, ['scripts']);
    gulp.watch(paths.watch).on('change', browserSync.reload);
});

gulp.task("styles", function (){
    gulp.src(paths.styles.src)
        .pipe(sass({
            outputStyle: "compressed",
        }))
        .on("error", function(err){
            browserSync.notify(err.message);
        })
        .pipe(autoprefixer("last 1 version", "> 1%", "ie 8", "ie 7"))
        .pipe(concat("project.min.css"))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
});

gulp.task("images", function(){
    gulp.src(paths.images.src)
        .on("error", function(err) { return err; })
        .pipe(gulp.dest(paths.images.dest))
});

gulp.task("scripts", function (){
    gulp.src(paths.scripts.src)
    gulp.src( paths.scripts.libs.concat(paths.scripts.src) )
        .pipe(uglify())
        .pipe(concat("app.min.js"))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());
});

gulp.task("clean", function(){
    gulp.src([paths.styles.dest, paths.scripts.dest], {read: false})
        .pipe(clean());
});

gulp.task('default', ['styles', 'scripts', 'images', 'browser-sync']);
