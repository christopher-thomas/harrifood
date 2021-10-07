import gulp from "gulp";
import browserSync from "browser-sync";
import sass from "gulp-sass";
import nunjucksRender from "gulp-nunjucks-render";

const server = browserSync.create();

function nunjucks(done) {

    gulp.src('Pages/**/*.+(html|njk)')
            .pipe(nunjucksRender({ path: ["Templates"] }))
            .pipe(gulp.dest("."));

    done();

}

function compileScss(done){

    gulp.src('styles/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("."));

    done();

}

function reload(done) {

    server.reload();
    done();

}

function serve(done) {

    server.init({

        server: {

            baseDir: "./"

        },
        ui: {

            port: 8080

        }

    });
    done();

}

const watch = () => {

    gulp.watch(['./**/*.njk', 'Styles/**/*.scss'], gulp.series(
        
        gulp.parallel(nunjucks, compileScss),
        reload
        
    ));

}

export default gulp.series(serve, watch);



// var gulp = require("gulp");
// var browserSync = require('browser-sync').create();

// //const { series, src, dest, watch, parallel } = require("gulp");
//     //,
//     // sass = require('gulp-sass'),
//     // kit = require('gulp-kit'),
//     // sassGlob = require('gulp-sass-glob'),
//     // inlinesource = require('gulp-inline-source'),
//     // browserSync = require('browser-sync').create();

//     gulp.task('browser-sync', function() {
//         browserSync.init({
//             server: {
//                 baseDir: "./"
//             }
//         });
//     });