interface Eg4 {
  name: string;
  age: number;
}

interface Eg5 {
  color: string;
  age: string;
}

/**
 * T的类型为 {name: string; age: number; age: never}
 * 注意，age因为Eg1和Eg2中的类型不一致，所以交叉后age的类型是never
 */
type T = Eg4 & Eg5;
// 可通过如下示例验证
const val: T = {
  name: "",
  color: "",
  age: (function a() {
    throw Error();
  })(),
};
