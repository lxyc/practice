// 匹配good or nice
const reg1 = /good|nice/g
const str1 = 'good idea, nice try.'

console.log(str1.match(reg1))

// 匹配
const reg2 = /good|goodbye/g
const str2 = 'goodbye'
console.log(str2.match(reg2))

const reg3 = /goodbye|good/g
const str3 = 'goodbye'
console.log(str3.match(reg3))

// 分支结构也是惰性的，即当前面的匹配上了，后面的就不再尝试