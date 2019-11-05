# Gulp tinypng

## 安裝 tinypng
	$ npm install gulp-tinypng-compress -save-dev

## code
	var gulp = require("gulp");
	var tinypng = require('gulp-tinypng-compress');

	gulp.task('tinypng', function (cb) {
	    gulp.src('./build/web-mobile/**/*.{png,jpg,jpeg}')
	        .pipe(tinypng({
	            key: 'xxxx',
	            sigFile: './build/.tinypng-sigs',
	            log: true
	        }))
	        .pipe(gulp.dest("./build/web-mobile/"))
	        .on("end", cb);
	});

## API Key
https://tinypng.com/developers [https://tinypng.com/developers]

## Run
	 gulp tinypng

