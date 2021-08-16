const reg1 = /\d{4}-\d{2}-\d{2}/
const reg2 = /(\d{4})-(\d{2})-(\d{2})/

const str1 = '2019-08-01'
console.log(reg1.exec(str1))
console.log(reg2.exec(str1))

console.log(str1.replace(reg2, '$1/$2/$3'))