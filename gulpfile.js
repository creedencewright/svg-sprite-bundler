var gulp       = require('gulp'),
    glob       = require('glob'),
    fs         = require('fs'),
    path       = require('path'),
    File       = require('vinyl'),
    SVGSpriter = require('svg-sprite'),
    svgSprite  = require('gulp-svg-sprite'),
    less       = require('gulp-less');

gulp.task('less', ['svg'], function() {
    gulp.src('./public/stylesheets/style.less')
        .pipe(less())
        .pipe(gulp.dest('./public/stylesheets'))
});

gulp.task('svg', function() {
    var config = {
        dest: '.',
        mode: {
            css: {
                dest: './',
                bust: false,
                mixin: 'svg-sprite',
                prefix: '.%s',
                dimensions: true,
                sprite: 'sprite.svg',
                render: {
                    less: {
                        template: 'sptpl.mustache'
                    }
                }
            }
        }
    };

    gulp.src('./public/images/svg/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./public/stylesheets/'))

    return;
});

gulp.task('default', ['less']);