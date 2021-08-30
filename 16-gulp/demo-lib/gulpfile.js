const { src, dest } = require("gulp");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const babel = require("gulp-babel");

exports.default = function (cb) {
  src("src/*.js")
    // 把 src 下面的文件经过babel转义
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    // 添加vendor下的文件
    .pipe(src("lib/*.js"))
    // 把源文件移动到 sources/
    .pipe(dest("sources/"))
    .pipe(uglify())
    // 把源文件，改为`.mini.js` 移动到 dist
    .pipe(rename({ extname: ".min.js" }))
    .pipe(dest("dist/"));
  cb();
};
