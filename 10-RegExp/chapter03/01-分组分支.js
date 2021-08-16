const reg1 = /(ab)+/g
const str1 = 'ababa abbb ababab'
console.log(str1.match(reg1))

const reg2 = /^I love (JavaScript|Regular Expression)$/
console.log(reg2.test('I love JavaScript'))