var gulp = require("gulp");
var sass = require("gulp-sass");
var runSequence = require("run-sequence");
var imagemin = require("gulp-imagemin");
var minifyCss = require("gulp-minify-css");
var prefix = require("gulp-autoprefixer");
var purge = require("gulp-css-purge");

gulp.task("sass", function() {
  return gulp
    .src("./dev/admin.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      minifyCss({
        keepSpecialComments: 1
      })
    )
    .pipe(gulp.dest("./"));
});

gulp.task("purge", function() {
  return gulp
    .src("./dev/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      minifyCss({
        keepSpecialComments: 1
      })
    )
    .pipe(
      purge({
        trim: true,
        shorten: true,
        verbose: true
      })
    )
    .pipe(gulp.dest("./"));
});

gulp.task("images", function() {
  return gulp
    .src("dev/**/*.+(png|jpg|gif|svg)")
    .pipe(imagemin())
    .pipe(gulp.dest("/"));
});

gulp.task("prefix", function() {
  gulp
    .src("css/main.css")
    .pipe(prefix())
    .pipe(gulp.dest("css"));
});

gulp.task("watch", function() {
  gulp.watch("./scss/*.scss", ["sass"]);
});

gulp.task("build", function(callback) {
  runSequence(["purge"], "images", "prefix", callback);
});

gulp.task("default", function(callback) {
  runSequence(["sass"], "watch", callback);
});
