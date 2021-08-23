// 设计一个异步轮询函数 AsyncLoop，可以异步的轮询执行任务，停止轮询，改变轮询时间。

class AsyncLoop {
  constructor() {
    this._stack = [];
    this._duration = 0;
    this._timerID = null;
  }

  add(task) {
    this._stack.push(task);
  }

  timer(duration) {
    this._duration = duration;
  }

  stop() {
    clearInterval(this._timerID);
  }

  start(duration) {
    this._duration = duration;
    let tasks = [...this._stack];
    let currDuration = duration;
    this._timerID = setInterval(() => {
      tasks.forEach((task) => task());
      console.log("----");

      tasks = [...this._stack];
      if (this._duration !== currDuration) {
        clearInterval(this._timerID);
        this.start(this._duration);
      }
    }, currDuration);
  }
}

const func1 = () => console.log("func1");
const func2 = () => console.log("func2");
const func3 = () => console.log("func3");
const loop = new AsyncLoop();
// 添加轮询任务
loop.add(func1);
loop.add(func2);
// 开始轮询，每1000毫秒轮询一次，1秒后输出: func1,func2
loop.start(1000);
// 轮询过程中也可添加任务，下一次轮询时执行
// loop.add(func3);
// // 修改轮询时间，下一次轮询时生效
loop.timer(500);
// // 停止轮询
// loop.stop();
