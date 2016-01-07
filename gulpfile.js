var gulp       = require('gulp'),
    svgSprite  = require('gulp-svg-sprite');

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
                sprite: '../public/images/sprite.svg',
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
        .pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('default', ['svg']);