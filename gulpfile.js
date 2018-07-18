const gulp = require('gulp');
const less = require('gulp-less');
const jade = require('gulp-jade');
const server = require('static-server');
const webpackStream = require('webpack-stream');
const named = require('vinyl-named');

/**
 * Compile javascript files
 */
gulp.task('javascript', function() {

    const options = {
        module: {
            rules: [
                {
                    test: /\.(pug|jade)$/,
                    use: {
                        loader: 'pug-loader',
                    },
                },
                {
                    test: /\.(less)$/,
                    use: {
                        loader: 'less-loader',
                    },
                },
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader?presets[]=es2015',
                    },
                    exclude: [/node_modules/]
                }
            ]

        }
    };

    return gulp.src('src/js/app.module.js')
        .pipe(named())
        .pipe(webpackStream(options))
        .pipe(gulp.dest('./js'));

});

gulp.task('styles', function () {
    return gulp.src('src/styles/app.less')
        .pipe(less())
        .pipe(gulp.dest('./css'))
});

gulp.task('html', function () {
    return gulp.src('src/html/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('.'));
});

gulp.task('build', ['styles', 'javascript', 'html']);

gulp.task('dev', function () {

    gulp.watch('src/styles/**/*.less', ['styles']);
    gulp.watch(['src/js/**/*.js', 'src/js/**/*.pug'], ['javascript']);
    gulp.watch('src/html/**/*.jade', ['html']);

    /**
     * @type {StaticServer}
     */
    const devServer = new server(
        {
            rootPath: '.',
            port: 3000,
            templates: {
                index: 'index.html'
            }
        }
    );

    devServer.start();

});