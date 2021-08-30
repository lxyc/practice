const { dest } = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

exports.default = function (cb) {
  tsProject
    .src()
    .pipe(tsProject())
    .pipe(dest("dist/"));
  cb();
};
