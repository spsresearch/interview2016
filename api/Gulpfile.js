var gulp = require('gulp'),
  nodemon = require('gulp-nodemon');

gulp.task('start', function () {
    nodemon({
        script: 'app/app.js'
    });
});
