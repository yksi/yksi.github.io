const gulp = require('gulp');
const less = require('gulp-less');
const jade = require('gulp-jade');
const server = require('static-server');
const webpackStream = require('webpack-stream');
const webpack = webpackStream.webpack;
const named = require('vinyl-named');
const path = require('path');

/**
 * Compile javascript files
 */
gulp.task('javascript', function() {

    const options = {
        module: {
            loaders: [
                {
                    include: path.join(__dirname, 'src'),
                    loader: 'babel-loader?presets[]=es2015'
                }
            ]
        }
    };

    gulp.src('src/js/*.**')
        .pipe(named())
        .pipe(webpackStream(options))
        .pipe(gulp.dest('dist/js'));

});

gulp.task('styles', function () {
    gulp.src('src/styles/app.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('html', function () {
    gulp.src('src/html/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('dist/'));
});

gulp.task('dev', function () {

    gulp.watch('src/styles/**/*.less', ['styles']);
    gulp.watch('src/js/**/*.js', ['javascript']);
    gulp.watch('src/html/**/*.jade', ['html']);

    /**
     * @type {StaticServer}
     */
    const devServer = new server(
        {
            rootPath: 'dist',
            port: 3000,
            templates: {
                index: 'index.html'
            }
        }
    );

    devServer.start();

});