var gulp = require("gulp");
var tinypng = require('gulp-tinypng-compress');

gulp.task('tinypng', function (cb) {
    gulp.src('./image/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: '',
            sigFile: './build/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest("./build/web-mobile/"))
        .on("end", cb);
});