var gulp = require('gulp');
var Server = require('karma').Server;
var replace = require('gulp-replace');

var postprocessLCOV = function() {
    return gulp.src('reports/coverage/lcov.info')
        .pipe(replace('SF:.', 'SF:frontend-project'))
        .pipe(gulp.dest('reports/coverage'));
};

gulp.task('test', function (done){

    new Server({
        configFile: __dirname + '/src/test/js/karma.conf.ci.js',
        singleRun: true
    }, done).start();

    //karma.start({
    //    configFile: __dirname + '/src/test/js/karma.conf.ci.js'
    //}, postprocessLCOV);
});