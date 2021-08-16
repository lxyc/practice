// 不匹配任何东西的正则【此正则要求只有一个字符，但该字符后面是开头】
const reg1 = /.^/

// 数字千分位分隔表示法
const res = '234567567'.replace(/\B(?=(\d{3})+\b)/g, ',')
console.log(res)

// 验证密码
// const reg2 = /^[0-9A-Za-z]{6,12}$/
// const reg3 = /(?=.*[0-9])^[0-9A-Za-z]{6,12}$/
const reg3 = /(?=.*[0-9])(?=.*[a-z])^[0-9A-Za-z]{6,12}$/


var reg = /((?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z]))^[0-9A-Za-z]{6,12}$/;
console.log( reg.test("1234567") ); // false 全是数字
console.log( reg.test("abcdef") ); // false 全是小写字母
console.log( reg.test("ABCDEFGH") ); // false 全是大写字母
console.log( reg.test("ab23C") ); // false 不足6位
console.log( reg.test("ABCDEF234") ); // true 大写字母和数字
console.log( reg.test("abcdEF234") ); // true 三者都有