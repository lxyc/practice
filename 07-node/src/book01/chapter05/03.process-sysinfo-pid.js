console.log(`当前进程id: ${process.pid}`);

console.log(`当前操作系统平台: ${process.platform}`);

console.log(`当前进程名称: ${process.title}`);

console.log(`NodeJS 版本号: %s`, process.version);

console.log('NodeJS 版本属性 \n %o', process.versions);

console.log('NodeJS 配置选项 \n %o', process.config);

console.log('运行当前进程可执行文件的绝对路径: %s', process.execPath);

console.log('当前进程的命令行参数数组: %o', process.argv);

console.log('当前CPU架构: %s', process.arch);

console.log('当前shell的环境变量 %o', process.env);