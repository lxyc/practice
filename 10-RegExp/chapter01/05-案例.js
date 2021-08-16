// 匹配16进制颜色值
const colorReg = /#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})/g
const colorStr = '#ffbbad #Fc01DF #FFF #ffE #rg8 5678'
console.log(colorStr.match(colorReg))

// 匹配时间
const timeReg = /([01][0-9]|2[0-3]):[0-5][0-9]/g // 仅匹配 02:02
// const timeReg = /(0?[0-9]|1[0-9]|2[0-3]):(0?[0-9]|[1-5][0-9])/g // 可匹配 2:2
const timeStr = '23:59 02:12 98:12 89.32 12:34 2:4'
console.log(timeStr.match(timeReg))

// 匹配日期
const dateReg = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])/g
const dateStr = '2019-04-12 3231-21-32 65903-12-243'
console.log(dateStr.match(dateReg))

// 匹配DOM ID
// const domReg = /id="(.*?)"/ // 设计到"回溯"
const domReg = /id="([^"]*)"/
const domStr = '<div id="container" class="main"></div>'
console.log(domStr.match(domReg)[1])