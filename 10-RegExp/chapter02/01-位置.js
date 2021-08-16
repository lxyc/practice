// 正则表达式是匹配模式，要么匹配字符，要么匹配位置

/**
 * ^ 脱字符 匹配开头，在多行匹配中匹配行开头
 * $ 美元符 匹配结尾，在多行匹配中匹配行结尾
 * \b 单词边界，\w和\W之间的位置，也包括\w和^的位置，也包括\w和$之间的位置
 * \B \b的反义，非单词边界
 * (?=p) p是一个子模式，即p前面的位置 正向先行断言
 * (?!p) 反义 负向先行断言
 */

const res1 = 'hello'.replace(/^|$/g, '#')
console.log(res1)

const res2 = 'I\nlove\njavascript'.replace(/^|$/gm, '#')
console.log(res2)

const res3 = '[JS] Lession_01.mp3'.replace(/\b/g, '#')
console.log(res3)

const res4 = '[JS] Lession_01.mp3'.replace(/\B/g, '#')
console.log(res4)

const res5 = 'hello'.replace(/(?=l)/g, '#')
console.log(res5) // he#l#lo

const res6 = 'hello'.replace(/(?!l)/g, '#')
console.log(res6) // #h#ell#o#

const res7 = 'hello'.replace(/(?<=l)/g, '#')
console.log(res7) // hel#l#o

const res8 = 'hello'.replace(/(?<!l)/g, '#')
console.log(res8) // #h#e#llo#