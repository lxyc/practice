// trim() 方法模拟
function trim(str) {
  return str.replace(/^\s+|\s+$/g, '')
}
console.log(trim('    foobar    '))

// 将每个单词转换为大写
function titleize(str) {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, c => c.toUpperCase())
}
console.log(titleize('my name is bill'))

// 驼峰化
function camelize(str) {
  return str.replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
}
console.log(camelize('-moz-transform'))

// 中划线化[驼峰化逆过程]
function dasherize(str) {
  return str.replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase()
}
console.log(dasherize('MozTransform'))

// html转义和反转义
function escapeHTML(str) {
  const escapeChars = {
    '¢' : 'cent',
	  '£' : 'pound',
	  '¥' : 'yen',
	  '€': 'euro',
	  '©' :'copy',
	  '®' : 'reg',
	  '<' : 'lt',
	  '>' : 'gt',
	  '"' : 'quot',
	  '&' : 'amp',
	  '\'' : '#39'
  }
  return str.replace(new RegExp(`[${Object.keys(escapeChars).join('')}]`, 'g'), match => `&${escapeChars[match]};`)
}
console.log(escapeHTML('<div>Blah blah blah</div>'))

function unescapeHTML(str) {
  const htmlEntities = {
	  nbsp: ' ',
	  cent: '¢',
	  pound: '£',
	  yen: '¥',
	  euro: '€',
	  copy: '©',
	  reg: '®',
	  lt: '<',
	  gt: '>',
	  quot: '"',
	  amp: '&',
	  apos: '\''
  }
  return str.replace(/\&([^;]+);/g, (match, key) => {
    if (key in htmlEntities) {
      return htmlEntities[key]
    }
    return match
  })
}
console.log(unescapeHTML('&lt;div&gt;Blah blah blah&lt;/div&gt;'))

// 匹配成对标签
const reg = /<([^>]+)>[\d\D]*<\/\1>/
var str1 = "<title>regular expression</title>";
var str2 = "<p>laoyao bye bye</p>";
var str3 = "<title>wrong!</p>";
console.log( reg.test(str1) ); // true
console.log( reg.test(str2) ); // true
console.log( reg.test(str3) ); // false
