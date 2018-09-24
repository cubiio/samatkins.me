const gulp = require("gulp");
const responsive = require("gulp-responsive");
const imagemin = require("gulp-imagemin");
const cache = require("gulp-cache");
const del = require("del");
const runSequence = require("run-sequence");

gulp.task("default", function(callback) {
  console.log("===================");
  console.log("Let's do this 💃 !");
  console.log("===================");
  runSequence("images", callback);
});

gulp.task("images", function(callback) {
  runSequence("resize-images", "minimise-images", "clean:staging", callback);
});

gulp.task("resize-images", function() {
  return gulp
    .src("src/images/pending/*.{png,jpg}")
    .pipe(
      responsive(
        {
          "*.jpg": {
            width: 500
          },
          // Resize all PNG images to be retina ready
          "*.png": [
            {
              width: 500
            }
          ]
        },
        {
          // Global configuration for all images
          // The output quality for JPEG, WebP and TIFF output formats
          quality: 70,
          // Use progressive (interlace) scan for JPEG and PNG output
          progressive: true,
          // Strip all metadata
          withMetadata: false
        }
      )
    )
    .pipe(gulp.dest("src/images/staging/"));
});

gulp.task("minimise-images", function() {
  return gulp
    .src("src/images/staging/**/*.+(png|jpg|jpeg|gif|svg)")
    .pipe(cache(imagemin()))
    .pipe(gulp.dest("static/images/"));
});

gulp.task("clean:staging", function() {
  return del(["src/images/staging/**/*"]);
});

// clears cache for imagemin
gulp.task("cache:clear", function(callback) {
  return cache.clearAll(callback);
});
