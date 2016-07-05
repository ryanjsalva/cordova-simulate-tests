/// <binding BeforeBuild='default' />
var gulp = require("gulp");
var tsc = require("gulp-typescript");

gulp.task("default", function () {
    var tsProject = tsc.createProject("tsconfig.json");
    return tsProject.src().pipe(tsc(tsProject));
});

