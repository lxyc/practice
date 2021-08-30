const { src, dest, series } = require("gulp");
const del = require("del");

const config = {
  src: "./src/**/*.js",
  dest: "./output",
};

// 清空文件夹
function clean(cb) {
  del.sync([config.dest]);
  cb();
}

// 复制文件到目标文件夹
function copy(cb) {
  src(config.src).pipe(dest(config.dest));
  cb();
}

exports.clean = clean; // gulp clean 可执行
exports.copy = copy; // gulp copy 可执行
// 顺序执行任务
exports.default = series(clean, copy); // gulp 执行
