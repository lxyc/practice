const reg1 = /\d{4}(-|\/|\.)\d{2}(-|\/|\.)\d{2}/
const string1 = "2017-06-12";
const string2 = "2017/06/12";
const string3 = "2017.06.12";
const string4 = "2016-06/12";

var a = reg1.test(string4)
console.log(RegExp.$1, a)

const reg2 = /\d{4}(-|\/|\.)\d{2}\1\d{2}/

console.log(reg2.test(string1))
console.log(reg2.test(string2))
console.log(reg2.test(string4))