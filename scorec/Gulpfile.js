var gulp       = require('gulp')
var browserify = require('browserify')  
var babelify   = require('babelify')
var uglify     = require('gulp-uglify')
var source     = require('vinyl-source-stream')
var buffer     = require('vinyl-buffer')

//Tarea que convierte un archivo escrito en ecmascript6 y lo pasa a ecmascript5 y con browserify lo entiende el
//navegador
gulp.task('build', function() {  
  browserify({
    entries: 'assets/js/ponentes/es6/index.js',
    extensions: ['.js'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('index.min.js'))
  .pipe(buffer())
  //.pipe(uglify())
  .pipe(gulp.dest('assets/js/ponentes/dist/'))
})

gulp.task('watch', function () {
    gulp.watch(['assets/js/ponentes/es6/*.js', 'assets/js/utils/*.js'], ['build'])
})

gulp.task('default', ['watch']);