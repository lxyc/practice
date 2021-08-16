// 精确匹配
const regex = /hello/;
console.log(regex.test(regex));

// 模糊匹配：横向匹配 一个正则可匹配的字符串长度不是固定的
const regex1 = /ab{2,5}c/;
const str1 = "abc abbc abbbc abbbbc abbbbbc";
console.log(str1.match(regex1));

// 模糊匹配：纵向匹配 一个正则匹配的字符串，具体到某一位字符是，他可以不是某个确定的字符，可以有多种可能
const regex2 = /a[123]b/g;
const str2 = "a0b a1b a2b a3b a4b";
console.log(str2.match(regex2));

// 【科普】match 方法
// 如果全局匹配 g 标志，则返回完整正则表达式匹配的所有结果，未匹配返回 null
// 未使用全局匹配，则返回捕获组，未匹配返回 null ===> 与 RegExp.exec() 相同
//  input: 搜索的字符串
//  index: 匹配的结果开始位置
//  groups: 一个捕获组数组或undefined