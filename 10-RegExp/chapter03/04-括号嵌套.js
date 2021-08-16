const reg1 = /^((\d)(\d(\d)))\1\2\3\4$/
const str1 = "1231231233"
reg1.test(str1)
console.log(RegExp.$1, RegExp.$2, RegExp.$3, RegExp.$4)

const reg2 = /(1)(2)(3)(4)(5)(6)(7)(8)(9)(#) \10+/
const str2 = "123456789# ######"
console.log(reg2.test(str2))

const reg3 = /\1\2\3\4\5\6\7\8\9/
console.log(reg3.test('\1\2\3\4\5\6\7\8\9'))